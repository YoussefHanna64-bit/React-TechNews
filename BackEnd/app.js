import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConfig.js";
import postRoutes from "./routes/postRoutes.js";
import cors from "cors";
import { handleError } from "./middleware/errorHandling.js";

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/posts", postRoutes);

app.use(handleError);

app.use((req, res, next) => {
  return res.status(404).json({
    message: "Route not found",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
