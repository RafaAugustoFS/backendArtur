const jwt = require('jsonwebtoken');

function authenticateToken (req, res, next){
    const token = req.headers["authorization"]?.split(' ')[1];

    //? = verifica se existe

    if(!token){
        return res.status(401).json({
            msg: "Acesso negado!"
        })
    }
    //headers, payload, secret
    jwt.verify(token, process.env.SECRET, (err,user) =>{
        if (err){
            return res.status(403).json({
                msg: "Acesso negado"
            })
        }
        //armazenar usuario na requisição
        req.user = user;

        next();
    })

}

module.exports = authenticateToken;