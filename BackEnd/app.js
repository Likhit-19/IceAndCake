require("dotenv").config();
console.log("MONGO_URL:", process.env.MONGO_URL);
const express=require('express');
const userRoute=require('./route/user');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const {connectCloudinary }=require("./connection/cloudinary");
const productRoute=require("./route/product");
const app=express();
const {connnectDB}=require('./connection/mongo');

const PORT=process.env.PORT || 8000;
connnectDB()
.then(()=>
{
    console.log("MongoDB is connected");
})
.catch((error) => {
    console.log("Something went wrong", error);
});
app.use(cors({
    origin:process.FRONTEND_URL||"http://localhost:5173",
    credentials:true,
}));
connectCloudinary();

app.use(express.json());
app.use(cookieParser());
app.use('/user',userRoute);
app.use('/Home',productRoute)
module.exports=app;