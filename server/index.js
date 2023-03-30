const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(cors());
server.use(middlewares);
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://for-three.vercel.app");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});
