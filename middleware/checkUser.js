import { verify } from "../services/token.js";
import { userModel } from "../models/userModel.js";

const checkUserAuthentication = (token) => {
  const check = async (req, res, next) => {
    if (!req.cookies) return next();
    const ticket = req.cookies[token];
    if (!ticket) return next();
    try {
      const payload = verify(ticket);

      const user = await userModel.findOne({
        userName: payload.userName,
        email: payload.email,
      });
      if (!user) return next();
      req.user = user;
    } catch (err) {
      console.log(err.message);
    }

    next();
  };
  return check;
};
export { checkUserAuthentication };
