import e, { Router } from "express";
import { listUser, createUser } from "../controllers/user.controller.js";
const userRouter = Router();

//list user
userRouter.get("/users", listUser);
userRouter.post("/users", createUser);
export default userRouter;
