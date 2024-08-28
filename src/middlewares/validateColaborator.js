const validateColaborator = (req, res, next) =>{
    const {nome, cnpj, mercadoria} = req.body;
    if(!nome || !cnpj || !mercadoria){
        return res.status(400).json({
            msg: "campos invalidos, revise !!"
        })
    }
    return next()
};
const validateColaboratorId = (req, res, next) => {
    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            msg: "Parâmetro faltando",
        })
    }
    return next();
};

module.exports = {validateColaborator, validateColaboratorId}