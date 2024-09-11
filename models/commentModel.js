import mongoose, { Schema } from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    blogId: { type: Schema.Types.ObjectId, ref: "Blogs" },
    createdBy: { type: Schema.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true }
);

const commentModel = mongoose.model("Comments", commentSchema);
export { commentModel };
