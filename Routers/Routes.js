import express from "express";
import { userUpload } from "../configs/multer.js";
import { handleSignin, handleSignup } from "../controllers/controls.js";

const Routerr = express.Router();

Routerr.get("/", (req, res) => {
  res.render("index.ejs", { user: req.user });
})
  .get("/log-in", (req, res) => {
    res.render("logIn.ejs");
  })
  .get("/sign-up", (req, res) => {
    res.render("signUp.ejs");
  })
  .get("/log-out", (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
  })
  .post("/sign-up", userUpload.single("avatar"), handleSignup)
  .post("/sign-in", handleSignin);

export { Routerr };
