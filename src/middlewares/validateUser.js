/*
req = request
res = response
next = next function
*/
    const validateUser = (req, res, next) => {
    const {nome, email, senha} = req.body;
    if(!nome || !email || !senha){
        return res.status(400).json({
            msg: "campos invalidos, revise irmão!!"
        });
    }
    //avança
    return next();
};
const validateUserId = (req, res, next) => {
    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            msg: "Parâmetro faltando",
        })
    }
    return next();
}
    


module.exports = { validateUser, validateUserId };