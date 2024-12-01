const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log(`Conexão efetuada com sucesso.`);
} catch (err) {
  console.log(`Erro ao conectar com o Banco.\nErro: ${err}`);
}

module.exports = sequelize;
