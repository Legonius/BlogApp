import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["ADMIN", "USER", "GUEST"],
      default: "USER",
    },
    avatar: { type: String, default: "avatar.jpeg" },
  },
  { timestamps: true }
);
const userModel = mongoose.model("Users", userSchema);
export { userModel };
