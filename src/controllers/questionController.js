module.exports = {
  index(req, res) {
    // separando as variáveis da rota de envido do formulário room
    const roomId = req.params.room;
    const questionId = req.params.question;
    const action = req.params.action;
    const password = req.body.password;

    console.log(`room = ${roomId}, question = ${questionId}, action = ${action}, password = ${password}`);
  }
}