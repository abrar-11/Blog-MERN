import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import postRouter from "./routes/postRouter.js";
import connectDB from "./config/database.js";
dotenv.config();



const PORT = process.env.PORT || 5000;

const app = express();

// Connecting to Database
connectDB();

app.use(express.json());

app.use("/api/v1", postRouter);

app.listen(PORT, () => {
   console.log(`Server listening on ${PORT}`.underline.cyan);
});
