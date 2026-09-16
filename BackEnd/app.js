require("dotenv").config();

const express = require("express");
const userRoute = require("./route/user");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectCloudinary } = require("./connection/cloudinary");
const productRoute = require("./route/product");
const { connnectDB } = require("./connection/mongo");

const app = express();

// CORS should come first
app.use(cors({
    origin: "https://ice-and-cake-8zie.vercel.app",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

connectCloudinary();

// Connect to MongoDB before routes
app.use(async (req, res, next) => {
    try {
        await connnectDB();
        next();
    } catch (error) {
        console.error("Database connection failed:", error.message);

        res.status(500).json({
            message: "Database connection failed"
        });
    }
});

app.use("/user", userRoute);
app.use("/Home", productRoute);

module.exports = app;