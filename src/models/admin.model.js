import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  position: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export const Admin = mongoose.model("Admin", AdminSchema);
