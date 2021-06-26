// importando o sqlite
const sqlite3 = require("sqlite3");
// importando o método open do sqlite
const { open } = require("sqlite");

module.exports = () => {
  open({
    filename: "/src/db/rocketq.sqlite",
    driver: sqlite3.Database,
  });
}