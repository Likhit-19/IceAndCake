const razorpay=require("../connection/razorpay");
const crypto= require("crypto");

async function createOrder(req,res)
{
     try{
        const{amount}=req.body;
        const options={
            amount:amount*100,
            currency:"INR",
            receipt:`receipt_${Date.now()}`,
        };
        const order= await razorpay.orders.create(options);

        res.status(200).json({
            success:true,
            order,
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"unable to create payment order",
        });
    }
}

async function verifyPayment(req,res)
{
    try{
        const{
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        }=req.body;

        const generatedSignature=
        crypto.createHmac("sha256",process.env.RAZORPAY_KEY_SECRET)
        .update(
            razorpay_order_id+
            "|"+
            razorpay_payment_id
        ).digest("hex");
        if(generatedSignature===razorpay_signature){
            return res.status(200).json({
                success:true,
                message:"payment verified successfully"
            });
        }
        return res.status(400).json({
            success:false,
            message:"Invalid payment signature"
        });
    }catch (error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Payment verification failed"
        });
    }
}

module.exports={
    createOrder,
    verifyPayment
}