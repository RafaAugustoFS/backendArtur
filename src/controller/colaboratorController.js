const {json} = require ('express')
const Colaborator = require('../models/colaborator')

const ColaboratorController = {
    create: async(req, res) =>{
        try {
            const{ nome, cnpj, mercadoria} = req.body;

            const colaboratorCriado = await Colaborator.create({ nome, cnpj, mercadoria });
            
            return res.status(200).json({
                msg: "Colaborador criado",
                colaborator: colaboratorCriado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"})
        }
    },
    update: async(req, res) =>{
    try {
        const {id} = req.params;
        const {nome, cnpj, mercadoria} = req.body;

        console.log("Atualizando o objeto");
        console.log(id);
        console.log({ nome,cnpj, mercadoria });

        const colaboratorUpdate = await Colaborator.findByPk(id);

        if(colaboratorUpdate = null){
            return res.status(404).json({
                msg: "Colaborador não encontrado"
            })
        }
        const updated = await colaboratorUpdate.update({
            nome,cnpj, mercadoria 
        })

        if(updated) {
            return res.status(200).json({
                msg: "Colaborador atualizado com sucesso"
            })
        }
        return res.status(500).json({
            msg: "erro ao atualizar o colaborador"
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({msg: "Acione o suporte!"})
    }    
        
    },
    getAll: async(req, res) =>{
        try {
            const colaboradores = await Colaborator.findAll();

            return res.status(200).json({
                msg: " Colaboradores encontrados! ",
                colaborator: colaboradores
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"})
        }
    },
    getOne: async(req, res) =>{
        try {
            const { id } = req.params;

            const colaboradorEncontrado = await Colaborator.findByPk(id)

            if(colaboradorEncontrado == null ){
                return res.status(404).json({
                    msg: "Erro"
                })
            }
            return res.status(200).json({
                msg: "User encontrado com sucesso!",
                colaborator: colaboradorEncontrado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Colaborador não encontrado, acione o suporte!"})
        }
    },
    delete: async(req, res) =>{
        const {id} = req.params;
        const colaboratorFinded = await Colaborator.findByPk(id);
        if(colaboratorFinded == null){
            return res.status(200).json({
                msg: " User deletado com sucesso !"
            })
        }
    await userFinded.destroy();
    }
}
module.exports = ColaboratorController;