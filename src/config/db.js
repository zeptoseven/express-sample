import mongoose from "mongoose";

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb://admin:youradminpassword@localhost:27017/express-sample?authSource=admin";

let connection = null;

const connectDB = async () => {
  if (!connection) {
    connection = mongoose
      .connect(MONGO_URI)
      .then((conn) => {
        console.log("Connected to Database");
        return conn;
      })
      .catch((err) => {
        console.error("Database connection error:", err);
        process.exit(1);
      });
  }
  return connection;
};

export default connectDB;
