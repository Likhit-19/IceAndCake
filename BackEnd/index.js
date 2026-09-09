require("dotenv").config();
const express=require('express');
const userRoute=require('./route/user');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const {connectCloudinary }=require("./connection/cloudinary");
const productRoute=require("./route/product");
const app=express();
const {connnectDB}=require('./connection/mongo');
connnectDB("mongodb://127.0.0.1:27017/IceAndCake")
.then(()=>
{
    console.log("MongoDB is connected");
})
.catch((error) => {
    console.log("Something went wrong", error);
});
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true,
}));
connectCloudinary();

app.use(express.json());
app.use(cookieParser());
app.use('/user',userRoute);
app.use('/Home',productRoute)
app.listen(8000,()=>{console.log("Server is running 8000")});