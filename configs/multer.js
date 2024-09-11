import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const userStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("public/user-imgs"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });
const userUpload = multer({ storage: userStorage });
export { upload, userUpload };
