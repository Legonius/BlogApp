import "dotenv/config";
import express from "express";
import ejs from "ejs";
import path from "path";
import { Routerr } from "./Routers/Routes.js";
import connectDB from "./configs/connect.js";
import { hashing } from "./controllers/passHash.js";
import cookieParser from "cookie-parser";
import { checkUserAuthentication } from "./middleware/checkUser.js";
import { blogRoute } from "./Routers/BlogRoute.js";
// import { fileURLToPath } from "url";
// Get the directory name of the current module (Es module need this)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const app = express();
const URL = "mongodb://localhost:27017/Legonius";
const port = process.env.PORT || 8000;
connectDB(URL);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkUserAuthentication("token"));
app.use("/blog", blogRoute);
app.use("/", Routerr);
app.use("/uploads", express.static("uploads"));
app.use(express.static(path.resolve("public")));

app.set("view engine", ejs);
app.set("views", path.resolve("./views"));

app.listen(port, () =>
  console.log(`server is running on "http://localhost:${port}"`)
);
hashing(10, "wadapau");
