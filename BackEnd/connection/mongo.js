const mongoose=require('mongoose');

async function connnectDB()
{
     try{
        await mongoose.connect(process.env.MONGO_URL);
        
     }catch(error)
     {
        console.log("MongoDB connection failed:",error);
        throw error;
     }
}

module.exports={connnectDB};