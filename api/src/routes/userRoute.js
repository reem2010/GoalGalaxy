import express from "express";
import * as controller from "../controller/userController.js";
import {userAuth} from "../middleware/userAuthentication.js"
const route = express.Router();

route.post("/login", userAuth, controller.login);
route.post("/register", userAuth, controller.register);
route.post("/logout", userAuth, controller.logout);
export default route;