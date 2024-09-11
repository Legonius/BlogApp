import express from "express";
import { uploadBlog } from "../controllers/blogControllers.js";
import { upload } from "../configs/multer.js";
import { blogModel } from "../models/blogModel.js";
import { commentModel } from "../models/commentModel.js";
const blogRoute = express.Router();

blogRoute
  .get("/", async (req, res) => {
    const blogs = await blogModel.find({});
    res.render("blogs.ejs", { blogs: blogs, user: req.user });
  })
  .get("/add-blog", (req, res) => {
    res.render("createBlog.ejs", { user: req.user });
  })
  .post("/add-blog", upload.single("image"), uploadBlog)
  .post("/:id", async (req, res) => {
    const addComm = await commentModel.create({
      text: req.body.comment,
      createdBy: req.user._id,
      blogId: req.params.id,
    });
    res.redirect(`/blog/${req.params.id}`);
  })
  .get(`/:id`, async (req, res) => {
    const blog = await blogModel.findById(req.params.id).populate("createdBy");
    const comMent = await commentModel
      .find({ blogId: req.params.id })
      .populate("createdBy");
    res.render("readBlog.ejs", {
      blog: blog,
      comments: comMent,
      user: req.user,
    });
  });
export { blogRoute };
