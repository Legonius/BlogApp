import jwt from "jsonwebtoken";
import "dotenv/config";

const secret = process.env.SECRET;
const createToken = (user) => {
  const payload = {
    userName: user.userName,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, secret, { expiresIn: "1h" }); //'1d 2h 34m 50s'
};

const verify = (tokenn) => {
  let payload = jwt.verify(tokenn, secret);
  return payload;
};

export { createToken, verify };
