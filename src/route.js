// importando o express
const express = require("express");
// importando o Router para as rotas
const route = express.Router();
// importando os controllers
const questionController = require("./controllers/questionController");
const roomController = require("./controllers/roomController");
// criando a primeira rota
route.get("/", (req, res) => {
  res.render("index", {page: "enter-room"});
});
// rota para a página room
route.get("/room/:room", (req, res) => {
  res.render("room");
});
// rota para a página create pass
route.get("/create-pass", (req, res) => {
  res.render("index", {page: "create-pass"});
});
// rota para enviar os dados do formulário para o banco de dados
route.post("/question/:room/:question/:action", questionController.index);
// rota para criar uma nova room
route.post("/create-room", roomController.create);
// exportando as rotas
module.exports = route;

