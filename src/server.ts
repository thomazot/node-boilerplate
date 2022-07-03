import express from "express";

const server = express();

server.get("/", (_, response) => {
  return response.send("Hello!");
});

export default server;