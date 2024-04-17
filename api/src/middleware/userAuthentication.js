import { error } from "console";
import jwt from "jsonwebtoken";
const secret_key = process.env.Secet_key;

export const userAuth = async (req, res, next) => {
  token = req.cookies["access-token"];
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }
  jwt.verify(token, secret_key, (err, user) => {
    if (err) {
      return res.status(403).json({ error: err });
    }
    req.user = user;
    next();
  });
};
