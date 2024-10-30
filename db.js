const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nom de la base de données
  process.env.DB_USER, // Nom d'utilisateur
  process.env.DB_PASSWORD, // Mot de passe
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: "added",
      updatedAt: "updated",
    },
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connexion établie avec succès."))
  .catch((err) => console.error("Erreur de connexion :", err));

sequelize.sync();

module.exports = sequelize;