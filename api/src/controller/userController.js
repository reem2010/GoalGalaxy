import * as model from "../models/userModel.js";
import bcrypt from "bcrypt";
import sign from "jsonwebtoken";
const secret_key = process.env.Secet_key;

export const register = async (req, res) => {
  const { email, password, name } = req.body();
  if (await model.getUser(email)) {
    return res.status(409).json({ message: "Email already exists" });
  }
  const pass = await bcrypt.hash(password, 10);
  model.createUser({
    email,
    password: pass,
    name,
  });
  res.status(201).json({ message: "Your account was created successfully" });
};
export const login = async (req, res) => {
  const { email, password } = req.body();
  const user = await model.getUser(email);
  if (!user) {
    return res.status(401).json({ message: "user doesnt exist" });
  }
  if (!(await bcrypt.compare(user.password, password))) {
    return res.status(401).json({ message: "wrong password" });
  }
  token = sign({ email: user.email, id: user.id }, secret_key);
  res.cookie("access-token", token, {
    maxAge: 60 * 60 * 24 * 30 * 1000,
    httpOnly: true,
  });
  res.status(200).json({ message: "successfully logged in" });
};
export const logout = async (req, res) => {
  res.clearCookie("access-token");
  res.status(200).json({ message: "successfully logged out" });
};
