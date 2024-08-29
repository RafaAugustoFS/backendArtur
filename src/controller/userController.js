const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require('../models/user');

const UserController = {

    login: async (req, res) =>{
        try {
            const {email,password} = req.body;

            const user = await User.findOne({where : { email }});

            if(!user){
                return res.status(400).json({
                    msg: "Email ou senha incorretos!!"
                })
            }

            const isValida = await bcrypt.compare(password, user.password);
             if(!isValida){
                return res.status(400).json({
                    msg: "Email ou senha incorretos!!"
                })
             }   

             const token = jwt.sign({ email: user.email, nome: user.nome }, process.env.SECRET, {expiresIn: '1h'});

             return res.status(200).json({
                msg:"Login realizado!",
                token
             })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"});
        }
    },
    create: async(req, res) => {
        try {
            const{ nome, email, password } = req.body;

            const hashPassword = await bcrypt.hash(password, 10);

            console.log(nome, email, "senha:", hashPassword)

            const usuarioCriado = await User.create({ nome, email, password: hashPassword })
            
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
            const{ nome,email,password} = req.body;

            console.log("Atualizando o objeto");
            console.log(id);
            console.log({ nome, email,password });

            const userUpdate = await User.findByPk(id);

            if(userUpdate === null){
                return res.status(404).json({
                    msg: "usuario não encontrado"
                })
            }
            const updated = await userUpdate.update({
                nome, password, email
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