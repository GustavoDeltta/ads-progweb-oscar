const express = require("express");
const controller = require("./controller");

const server = express();
const PORT = 8080;

server.use(express.json());

server.get("/all", controller.allMovies);
server.post("/insert", controller.addMovie);
server.delete("/delete/:id", controller.deleteMovie);

server.listen(PORT, () => console.log("Server ON"));