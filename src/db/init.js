// iniciando o banco de dados para criar o banco de dados e as tabelas
// importando a conexão com o banco de dados
const Database = require("./config");
// guardar as funções de operações com o banco de dados
const initDb = {
  async init() {
    const db = await Database();
    // criando a tabela de rooms
    await db.exec(`
    CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT
    )
    `);
    // criando a tablea de questions
     await db.exec(`
      CREATE TABLE questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        read INT,
        room INT 
      )
    `);

    await db.close();
  }
}

initDb.init();


