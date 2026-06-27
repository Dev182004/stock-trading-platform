import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import holdingRoutes from "./routes/holdingRoutes.js";
import positionRoutes from "./routes/positionRoutes.js";

const PORT = process.env.PORT || 3002;
const mongoURI = process.env.MONGO_URI;

const app = express();

const allowedOrigins = process.env.FRONTEND_URLS 
  ? process.env.FRONTEND_URLS.split(",") 
  : [];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/orders", orderRoutes);
app.use("/holdings", holdingRoutes);
app.use("/positions", positionRoutes);

const startServer = async () => {
  try {
    if (!mongoURI) {
      throw new Error("MONGO_URI is missing");
    }

    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

startServer();