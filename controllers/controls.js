import { userModel } from "../models/userModel.js";
import { createToken } from "../services/token.js";
import { compare, hashing } from "./passHash.js";

const handleSignup = async (req, res) => {
  let hash = await hashing(10, req.body.password);
  const newUser = await userModel.create({
    userName: req.body.userName,
    email: req.body.email,
    password: hash,
    avatar: req.file.filename,
  });
  console.log(newUser);
  res.redirect("/log-in");
};

const handleSignin = async (req, res) => {
  const user = await userModel.findOne({ userName: req.body.userName });
  if (!user) return console.log("user not found");
  let isMatch = await compare(req.body.password, user.password);

  if (isMatch) {
    let token = createToken(user);
    res.cookie("token", token);
    res.redirect("/");
    console.log("log-IN");
  } else {
    console.log("Wrong Password");
  }
};

export { handleSignup, handleSignin };
