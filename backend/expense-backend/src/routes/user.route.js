import { Router } from "express";

const userRouter = Router();

const users = [
  {
    name: "Ankit",
    email: "ankit@gmail.com",
    isActive: true,
  },
];

//list user
userRouter.get("/users", (req, resp) => {
  resp.json(users);
});

export default userRouter;
