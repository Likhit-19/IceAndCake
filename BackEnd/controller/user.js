const User=require('../module/user');
const jwt=require("jsonwebtoken");
const signature="IceAndCake";
const  bcrypt= require("bcrypt");
async function handleSingup(req,res)
{
    
    try{
       const data=req.body;
       const hashedPassword= await bcrypt.hash(data.password,10);
   const user= await User.create(
    {
        name:data.name,
        email:data.email,
        password:hashedPassword,
    }
    );
    return res.status(200).json({
        message:"User created successfully",
    })
   }catch(error)
   {
         console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
   }
   
}

async function handleLogin(req,res)
{
    const data=req.body;
     const email=data.email;
     const password=data.password;
     const user= await User.findOne(
        {email}
     );
     if(!user)
     {
        return res.status(401).json({
            message:"Invalid email or password",
        });
     }
     const isPassCorrect=await bcrypt.compare(password,user.password);
     if(!isPassCorrect)
     {
        return res.status(401).json({
            message:"Invalid email or password",
        });
     }
     const token=jwt.sign(
        {id:user._id,
        email:user.email,
        },
        signature,
        {
            expiresIn:"1h",
        }
     );
     res.cookie("Uid",token,
        {
            httpOnly:true,
            secure:true,
            sameSite:"none",
        }
     );
     res.json({message:"Login Successful"});
}

async function handleFrontendAuth(req,res)
{
   const token=req.cookies?.Uid;
   if(!token)
      {
        return res.status(401).json({
            messgae:"You are not logged in",
        });
      }
   try{
        const decoded= jwt.verify(token,signature);
        const user=await User.findById(decoded.id);
        return res.json({user});
   }catch(error)
   {
     console.log("something occured",error);
      return res.status(401).json({
        message: "Invalid or expired token"
    });
   }
}

function handleLogout(req,res)
{
    res.clearCookie("Uid",
        {
          httpOnly: true,
        secure: true,
        sameSite: "none",  
        }
    ).json({message:"Logged out successfully"});

}
module.exports={handleSingup,handleLogin,handleFrontendAuth,handleLogout};