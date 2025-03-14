// index.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5173;
const URI = process.env.MONGO_URI;



app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

try {
  console.log("MONGODB_URI:", URI);
  if (!URI) {
    throw new Error("MongoDB URI is required");
  }
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Connected");
} catch (error) {
  console.log("Failed to connect", error);
}

app.use("/user", userRoutes);
app.listen(PORT, () => {
  console.log(`Example app listening on ${PORT}`);
});
