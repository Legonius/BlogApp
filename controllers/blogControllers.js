import { blogModel } from "../models/blogModel.js";

const uploadBlog = async (req, res) => {
  const newBlog = await blogModel.create({
    title: req.body.title,
    imageUrl: req.file.filename,
    body: req.body.body,
    createdBy: req.user._id,
    author: req.user.userName,
  });
  res.redirect("/");
};

export { uploadBlog };
