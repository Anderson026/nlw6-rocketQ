// importando o express
const express = require("express");
// importando o Router para as rotas
const route = express.Router();
// criando a primeira rota
route.get("/", (req, res) => {
  res.render("index");
});
// rota para a página room
route.get("/room", (req, res) => {
  res.render("room");
});
// rota para a página create pass
route.get("/create-pass", (req, res) => {
  res.render("create-pass");
});
// rota para enviar os dados do formulário para o banco de dados
route.get("/room/:room/:question/:action", (req, res) => {
  res.render("exemplo", {req});
});
// exportando as rotas
module.exports = route;

// parei as 1:55:53 do 4 dia da NLW