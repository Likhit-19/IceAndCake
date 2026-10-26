const express = require("express");
const router = express.Router();
const upload = require("../midleware/upload");

const {
    getAllProduct,
    handleAddProduct,
    getAllCake
} = require("../controller/product");

router.get("/", getAllProduct);
router.post("/addProduct", upload.single("image"), handleAddProduct);
router.get("/Cake", getAllCake);

module.exports = router;