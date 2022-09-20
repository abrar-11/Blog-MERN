import mongoose from "mongoose";

const connectDB = () => {
   mongoose
      .connect(process.env.MONGO_URI)
      .then((e) => console.log(`MongoDB Connected successfully`.magenta));
};

export default connectDB;
