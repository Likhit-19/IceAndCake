const express=require("express");
const razorpay=require("../connection/razorpay");
const {createOrder,verifyPayment}=require("../controller/payment");
const router=express.Router();

router.post("/create-order",createOrder);
router.post("/verify",verifyPayment);
module.exports=router;