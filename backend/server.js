// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Simple test route
app.get("/", (req, res) => {
  res.send("🏥 Hospital Appointment Backend Connected Successfully!");
});

// ✅ Connect to MongoDB Atlas
const connectToMongoDB = async () => {
  try {
    console.log("🔄 Connecting to MongoDB...");
    console.log("Using URI:", process.env.MONGO_URI ? "Loaded from .env ✅" : "❌ Not found");

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // wait 10 seconds before timeout
    });

    console.log("✅ Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Stop the server if DB connection fails
  }
};

// Start server only after successful DB connection
connectToMongoDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
