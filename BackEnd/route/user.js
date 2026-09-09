const express=require("express");
const router=express.Router();
const {handleLogin,handleSingup,handleFrontendAuth,handleLogout}=require("../controller/user");

router.post("/login",handleLogin);
router.post("/signup",handleSingup);
router.get("/auth",handleFrontendAuth);
router.get("/logout",handleLogout);
module.exports = router;