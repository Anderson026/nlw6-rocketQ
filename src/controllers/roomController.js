// importando o banco de dados
const Database = require("../db/config");

module.exports = {
  // método para criar um id aleatório para a room
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password;
    let roomId;
    let isRoom = true;

    while(isRoom) {

      // gerar o número da sala
      for (let i = 0; i < 6; i++) {
        i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
        roomId += Math.floor(Math.random() * 10).toString();
      }

      // Verificar se esse número da sala já existe
      const roomsExistIds = await db.all(`SELECT id FROM rooms`);
  
      isRoom = roomsExistIds.some(roomExistIds => roomExistIds === roomId);

      if (!isRoom) {  
        // insere a sala no banco
        await db.run(`
          INSERT INTO rooms(
            id,
            pass
          ) VALUES (
            ${parseInt(roomId)},
            ${pass}
          )
        `)
      }

    } 
    await db.close();
    res.redirect(`/room/${roomId}`);
  },

  async open (req, res) {
    const db = await Database();
    const roomId = req.params.room;
    const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`);
    const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`);

    res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead});
  },
   enter(req, res) {
    const roomId = req.body.roomId;

    res.redirect(`/room/${roomId}`);
   }
}

// parei aos 40:50 da aula 5 do nlw