const Product=require("../module/product");
const mongoose = require("mongoose");
const {cloudinary} =require("../connection/cloudinary");
async function getAllProduct(req, res) {
    try {
        console.log("DB NAME:", mongoose.connection.name);
        console.log("DB HOST:", mongoose.connection.host);

        const products = await Product.find({});

        console.log("PRODUCT COUNT:", products.length);

        res.status(200).json(products);

    } catch (error) {
        console.log("FETCH ERROR:", error);

        res.status(500).json({
            message: "failed to fetch products",
            error: error.message
        });
    }
}
async function handleAddProduct(req,res)
{
  try{
    const result= await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
        {
            folder:"IceAndCake",
        }
        
    );
    const product=await Product.create({
        name:req.body.name,
        price:req.body.price,
        category:req.body.category,
        describe:req.body.describe,
        imageUrl:result.secure_url
    });

    return res.status(201).json("Product is been added.");
  }catch(error)
  { 
   console.log(error);
  return res.status(500).json({
    message: "Failed to create product",
    error: error.message
  });
  }

}

module.exports={getAllProduct,handleAddProduct};