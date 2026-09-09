const mongoose=require('mongoose');

async function connnectDB(url)
{
     try{
        await mongoose.connect(url);
        
     }catch(error)
     {
        console.log("MongoDB connection failed:",error);
        throw error;
     }
}

module.exports={connnectDB};