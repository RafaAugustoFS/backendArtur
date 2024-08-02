const express = require('express');
const router = require("./router/router")

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

app.listen(8080, () => {
    console.log("#####");
    console.log("Funcionou");
    console.log("#####");
})