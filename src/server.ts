import express from "express";

const server = express();

server.get("/", (_, res) => {
  res.send("Hello ts-node!");
});

server.get("/palindrom", (_, res) => {
  res.send("palindromo");
});



export default server;