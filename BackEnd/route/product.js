const express=require("express");
const router=express.Router();
const upload=require("../midleware/upload");
const {getAllProduct,handleAddProduct}=require("../controller/product");

router.get("/",getAllProduct);
router.post("/addProduct",upload.single("image"),handleAddProduct);

module.exports=router;