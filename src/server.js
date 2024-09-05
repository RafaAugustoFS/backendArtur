require("dotenv").config();
const express = require("express");
const router = require("./router/router");
const sequelize = require("./config/config");
const cors = require("cors");
const User = require("./models/user");
const Product = require("./models/product");

const app = express();
//API modelo JSON
app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/", router);

app.get("/healthcheck", (req, res) => {
  // 200 -> OK
  return res.status(200).json({
    msg: "Estamos vivos!",
    alive: true,
  });
});

sequelize
  .authenticate()
  .then(async () => {
    console.log("Conexão estabelecida com sucesso!");
    await sequelize.sync({}); //Sincroniza o código com a tabela
  })
  .then(() => {
    app.listen(process.env.PORT == null ? 8080 : process.env.PORT, () => {
      console.log("#####");
      console.log("Rodando na porta 8080");
      console.log("#####");
    });
  })
  .catch(() => {
    console.error("Erro ao se conectar com o DataBase!");
  });
