/*
req = request
res = response
next = next function
*/
const validateProduct = (req, res, next) => {
    const {nome, preco, quantidade} = req.body;
    if(!nome || !preco || !quantidade){
        return res.status(400).json({
            msg: "campos invalidos, revise irmão!!"
        });
    }
    //avança
    return next();
};
const validateProductId = (req, res, next) => {
    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            msg: "Parâmetro faltando",
        })
    }
    return next();
}
    


module.exports = { validateProduct, validateProductId };