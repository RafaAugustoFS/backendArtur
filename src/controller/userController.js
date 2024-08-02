const UserController = {
    create: async(req, res) => {
        try {
            const{ nome, idade , senha, email } = req.body;

            console.log({ nome, idade, senha, email });
            
            return res.status(200).json({
                msg: "User criado com êxito"
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"})
        }
    },
    update: async(req, res) => {
        try {
            const { id } = req.params;
            const{ nome, idade , senha, email } = req.body;

            console.log("Atualizando o objeto");
            console.log(id);
            console.log({ nome, idade, senha, email });
            
            return res.status(200).json({
                msg: "User atualizado com êxito"
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"})
        }
    },
    getAll: async(req, res) => {
        try {
            return res.status(200).json({
                msg: " Users encontrados! ",
                usuarios: {}
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"})
        }
    },
    getOne: async(req, res) => {
        try {
            return res.status(200).json({
                msg: "User encontrado com sucesso!",
                usuario: {}
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"})
        }
    },
    delete: async(req, res) => {try {
            return res.status(200).json({
                msg: " User deletado com sucesso !"
            })
    } catch (error) {
        console.error(error);
        return res.status(500).json({msg: "Acione o suporte!"})
    }},
}
module.exports = UserController;