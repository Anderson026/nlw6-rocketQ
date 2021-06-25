// importando o express
const express = require("express");
// importando o Router para as rotas
const route = express.Router();
// importando os controllers
const questionController = require("./controllers/questionController");
// criando a primeira rota
route.get("/", (req, res) => {
  res.render("index", {page: "enter-room"});
});
// rota para a página room
route.get("/room", (req, res) => {
  res.render("room");
});
// rota para a página create pass
route.get("/create-pass", (req, res) => {
  res.render("create-pass", {page: "create-pass"});
});
// rota para enviar os dados do formulário para o banco de dados
route.post("/room/:room/:question/:action", questionController.index);
// exportando as rotas
module.exports = route;

