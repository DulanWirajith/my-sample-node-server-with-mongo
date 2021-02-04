const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, (err) => {
  if (err) {
    console.log(port + " server error");
  } else {
    console.log("Server up and running on port : " + port);
  }
});
