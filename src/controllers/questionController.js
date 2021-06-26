// importando o config do banco de dados
const Database = require("../db/config");

module.exports = {

  index(req, res) {
    // separando as variáveis da rota de envido do formulário room
    const roomId = req.params.room;
    const questionId = req.params.question;
    const action = req.params.action;
    const password = req.body.password;

    console.log(`room = ${roomId}, question = ${questionId}, action = ${action}, password = ${password}`);
  },
  // criando a regra de negócios para criar uma question
  async create(req, res) {
    // iniciando o banco de dados
    const db = await Database();
    const question = req.body.question;
    const roomId = req.params.room;

    await db.run(`
      INSERT INTO questions(
        title,
        room,
        read
      ) VALUES (
        "${question}",
        ${roomId},
        0
      )
    `)

    res.redirect(`/room/${roomId}`);
  }

}