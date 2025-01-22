import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/express")
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(`Error: ${err}`));

export default mongoose;
