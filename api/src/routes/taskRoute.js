import express from "express";
import * as controller from "../controller/taskController.js";
import {userAuth} from "../middleware/userAuthentication.js"
const route = express.Router();

route.get("/:id", userAuth, controller.getTask);
route.post("/:user_id", userAuth, controller.createTask);
route.delete("/:id", userAuth, controller.deleteTask);
route.put("/:id", userAuth, controller.updateTask);
export default route;