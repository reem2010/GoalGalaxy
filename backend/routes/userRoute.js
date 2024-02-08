import express from "express";
import { loginController } from'../controller/login.js';
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const route = express.Router();

route.post('/login',loginController);
export default route;