import mongoose, { Schema } from "mongoose";
const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String },
    body: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "Users" },
    author: { type: String, default: "anonymous" },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blogs", blogSchema);
export { blogModel };
