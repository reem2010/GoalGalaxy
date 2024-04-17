import express from "express";
import task from "./routes/taskRoute.js";
import user from "./routes/userRoute.js";
import cookieParser from "cookie-parser"

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use('/user', user);
app.use('/task', task);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});