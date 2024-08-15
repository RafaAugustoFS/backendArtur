const { Router } = require("express");
const UserController = require("../controller/userController")
const ProductController = require("../controller/productController")

const routerUser = Router();
const routerProduct = Router();



//Configura as rotas (Crud)
routerUser.post('/user/', (req, res) =>{
    UserController.create(req, res)
})

routerUser.get('/user/', (req, res) =>{
    UserController.getAll(req, res)
})

routerUser.delete('/user/:id', (req, res) =>{
    UserController.delete(req, res)
})

routerUser.put('/user/:id', (req, res) =>{
    UserController.update(req, res)
})

routerUser.get('/user/:id', (req, res) =>{
    UserController.getOne(req, res)
})



routerProduct.post('/produto', (req, res) =>{
    ProductController.create(req, res)
})

routerProduct.get('/produto', (req, res) =>{
    ProductController.getAll(req, res)
})

routerProduct.delete('/produto/:id', (req, res) =>{
    ProductController.delete(req, res)
})

routerProduct.put('/produto/:id', (req, res) =>{
    ProductController.update(req, res)
})

routerProduct.get('/produto/:id', (req, res) =>{
    ProductController.getOne(req, res)
})
module.exports = routerUser;
module.exports = routerProduct;