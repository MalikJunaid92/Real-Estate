import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/userRouter.js";
import authrouter from "./routes/authRouter.js";
import cookieParser from 'cookie-parser'
import listingrouter from "./routes/listingRoute.js";
dotenv.config();

mongoose
  .connect(process.env.MongoDb)
  .then(() => {
    console.log("MongoDb successfully connected");
  })
  .catch((err) => {
    console.error("MongoDb connection error:", err);
  });
const app = express();
app.use(express.json())
app.use(cookieParser())
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
app.use("/api/user", router);
app.use("/api/auth", authrouter);
app.use("/api/listing", listingrouter);
app.use((error, req, res, next) => {

  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });

})

