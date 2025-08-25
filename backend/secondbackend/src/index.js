import http from "http";

const server = http.createServer((req, resp) => {
  
  console.log("Request received");
  resp.writeHead(200, { "Content-Type": "text/plain" });
  resp.end("Hello, Client, how are  you??!\n");
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
