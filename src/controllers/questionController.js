// importando o config do banco de dados
const Database = require("../db/config");

module.exports = {

  async index(req, res) {
    const db = await Database();
    // separando as variáveis da rota de envido do formulário room
    const roomId = req.params.room;
    const questionId = req.params.question;
    const action = req.params.action;
    const password = req.body.password;
    // Verificar se a senha está correta
    const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);
    if(verifyRoom.pass == password) {
      if(action == "delete") {

        await db.run(`DELETE FROM questions WHERE id = ${questionId}`);

      } else if (action == "check") {
        
        await db.run(`UPDATE questions SET 
          read = 1 WHERE id = ${questionId}
        `)

      }
      res.redirect(`/room/${roomId}`);
    } else {
      res.render("passIncorrect", {roomId: roomId});
    }
    
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