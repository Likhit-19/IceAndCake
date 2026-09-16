const mongoose = require("mongoose");

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}

async function connnectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGO_URL);
    }

    try {
        cached.conn = await cached.promise;
        console.log("MongoDB is connected");
        return cached.conn;
    } catch (error) {
        cached.promise = null;
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
}

module.exports = { connnectDB };