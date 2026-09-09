const jwt=require("jsonwebtoken");
const signature="IceAndCake";
const User=require("../module/user");
async function restrictedLoggedinUserOnly(req,res,next)
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
        const user=await User.findById(decode.id);
        if(!user)
        {
            return res.status(401).json({
                message:"User not found",
            })
        }
        req.user=user;
        next();
      }catch(error)
      {
        return res.status(401).json({
            message:"Invalid or expired token",
        })
      }
}

module.exports={restrictedLoggedinUserOnly};