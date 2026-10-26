const express=require("express");
const router=express.Router();
const upload=require("../midleware/upload");
const {getAllProduct,handleAddProduc,getAllIceCream}=require("../controller/product");

router.get("/",getAllProduct);
router.post("/addProduct",upload.single("image"),handleAddProduct);
 router.get("/IceCream",getAllIceCream);
router.get("/Cake",getAllCake);
module.exports=router;