const express = require('express');
const router = require("./router/router");
const sequelize = require('./config/config');
const User = require("./models/user")

const app = express();
//API modelo JSON
app.use(express.json());
app.use('/api/user', router);

app.get('/healthcheck', (req,res) =>{
    // 200 -> OK
    return res.status(200).json({
        msg: 'Estamos vivos!',
        alive: true
    })
})

sequelize.authenticate()
.then(async () =>{
    console.log("Conexão estabelecida com sucesso!");
    await sequelize.sync({ }); //Sincroniza o código com a tabela
})
.then(() =>{
    app.listen(8080, () =>{
        console.log("#####");
        console.log("Rodando na porta 8080");
        console.log("#####");
    })
})
.catch(() =>{
    console.error( "Erro ao se conectar com o DataBase!");
})