//importing http module
import http from "http";

console.log("this is first file of backend");

//creating server using http.createServer
const server = http.createServer((req, resp) => {
  //kab chalega ---> jab server ke pass request ayegi

  console.log("new request");
  //bhejenge server se client ko
  //resp is for sending resposne
  //req is for getting information from request
  resp.writeHead(200, {
    "content-type": "text/html",
  });

  resp.end(`<h1>Hello welcome to server !!</h1>
    <p> this is html file </p>
    `);
});

//putting server to listen port 8081

server.listen(8081, () => {
  console.log("server is running..");
});
