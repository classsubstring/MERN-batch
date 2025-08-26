//import express
import express from "express";
import expenseRouter from "./routes/expense.route.js";
import userRouter from "./routes/user.route.js";
// express to get app
const app = express();

//it will parse your json
app.use(express.json());

// routes

app.use("/api", expenseRouter);
app.use("/api", userRouter);

app.get("/", (req, resp) => {
  console.log("this is my root url");
  resp.json({
    message: "Welcome to expense backend.",
  });
});

//sever start
app.listen(8081, () => {
  console.log("Server started on port 8081");
});
