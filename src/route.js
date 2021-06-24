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
// exportando as rotas
module.exports = route;