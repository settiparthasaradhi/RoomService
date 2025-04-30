import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";

dotenv.config();
connectDB();

const app = express();

// ✅ Fix CORS issue
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from frontend
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);

app.listen(5000, () => console.log(`Server running on port 5000`));