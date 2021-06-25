// importando o express
const express = require("express");
// importando as rotas
const route = require("./route");
// importando o path
const path = require("path");

// colocando o expresse dentro de uma variável
const server = express();

// configuração do ejs
server.set("view engine", "ejs");
// setando o caminho da pasta das views
server.set("views", path.join(__dirname, "views"));
// importando o middleware para pegar os dados do formulário post e enviar para o controller
server.use(express.urlencoded({extended: true}))

// importando os arquivos estáticos
server.use(express.static("public"));

// usando as rotas
server.use(route);

// executando o servidor na porta 3000
server.listen(3000, () => console.log("Server is running on port 3000"));