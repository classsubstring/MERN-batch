import express from "express";

const app = express();

app.get("/products", (req, resp) => {
  resp.json([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ]);
});

app.get("/", (req, resp) => {
  console.log("get request received at /");
  //   resp.send("Hello, World! This is the root endpoint.");
  resp.json({
    message: "Hello, World! This is the root endpoint.",
    timestamp: new Date(),
  });
});

app.post("/", (req, resp) => {
  console.log("post request received at /");
  resp.send("Hello, World! This is the root endpoint for POST requests.");
});

app.delete("/", (req, resp) => {
  console.log("delete request received at /");
  resp.send("Hello, World! This is the root endpoint for DELETE requests.");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
