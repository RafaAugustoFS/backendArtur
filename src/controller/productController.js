const {json } = require ('express')
const Product = require('../models/product');
const { getAll } = require('./userController');

const ProductController = {
    create: async(req,res) =>{
        try {
            const{ nome, preco, quantidade } = req.body;

            console.log(nome, preco, quantidade);

            const produtoCriado = await Product.create({ nome, preco, quantidade })

            return res.status(200).json({
                msg: "Produto criado com sucesso!",
                Product: produtoCriado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"})
        }
    },
    update: async(req, res) =>{
        try {
            const { id } = req.params;
            const{ nome, preco, quantidade} = req.body;

            console.log("Atualizando o objeto");
            console.log(id);
            console.log({ nome,preco, quantidade });
            
            const productUpdate = await Product.findByPk(id);

            if(productUpdate = null){
                return res.status(404).json({
                    msg: "Produto não encontrado"
                })
            }

            const updated = await productUpdate.update({
                nome, preco, quantidade
            })

            if(updated){
                return res.status(200).json({
                    msg: "Atualizado com sucesso"
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
    getAll: async(req, res) =>{
        try {
            const produtos = await Product.findAll();

            return res.status(200).json({
                msg: "Produtos encontrados!",
                produtos: produtos
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"})
        }
    },
    getOne: async(req, res) =>{
        try {
            const { id } = req.params;

            const produtoEncontrado = await Product.findByPk(id)

            if (produtoEncontrado == null) {
                return res.status(404).json({
                    msg: "Erro"
                })
            }
            return res.status(200).json({
                msg: "Produto encontrado com sucesso",
                produto: produtoEncontrado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o suporte!"})
        }
    },
    delete: async(req, res) =>{
        try {
            const {id} = req.params;
            const productFinded = await Product.findByPk(id);
            if(productFinded == null){
                res.status(404).json({
                    msg: "Produto não encontrado!"
                })
        }
        await productFinded.destroy();
        return res.status(200).json({
            msg:"Produto deletado com sucesso",
        })
        } catch (error) {
            console.error(error);
            res.status(500).json({msg: "Acione o suporte!"})
        }
    }
}
module.exports = ProductController;