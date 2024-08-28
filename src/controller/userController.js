const {json } = require ('express')
const User = require('../models/user')

const UserController = {
    create: async(req, res) => {
        try {
            const{ nome, email, password } = req.body;

            console.log(nome, email, password)

            const usuarioCriado = await User.create({ nome, email, password })
            
            return res.status(200).json({
                msg: "User criado com êxito",
                user: usuarioCriado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"})
        }
    },
    update: async(req, res) => {
        try {
            const { id } = req.params;
            const{ nome, senha, email } = req.body;

            console.log("Atualizando o objeto");
            console.log(id);
            console.log({ nome,senha, email });

            const userUpdate = await User.findByPk(id);

            if(userUpdate === null){
                return res.status(404).json({
                    msg: "usuario não encontrado"
                })
            }
            const updated = await userUpdate.update({
                nome, senha, email
            })

            if(updated) {
                return res.status(200).json({
                    msg: "Usuario atualizado com sucesso"
                })
            }
            return res.status(500).json({
                msg: "Erro ao atualizar o usuário"
            })
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"})
        }
    },
    getAll: async(req, res) => {
        try {
            const usuarios = await User.findAll();

            return res.status(200).json({
                msg: " Users encontrados! ",
                usuarios: usuarios
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"})
        }
    },
    getOne: async(req, res) => {
        try {
            const { id } = req.params;

            const usuarioEncontrado = await User.findByPk(id)

            if(usuarioEncontrado == null ){
                return res.status(404).json({
                    msg: "Erro"
                })
            }
            return res.status(200).json({
                msg: "User encontrado com sucesso!",
                usuario: usuarioEncontrado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Usuário não encontrado, acione o suporte!"})
        }
    },
    delete: async(req, res) =>{
            const {id} = req.params;
            const userFinded = await User.findByPk(id);
            if(userFinded == null){
                return res.status(200).json({
                    msg: " User deletado com sucesso !"
                })
            }
        await userFinded.destroy();
    },
}
module.exports = UserController;