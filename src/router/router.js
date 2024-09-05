const { Router } = require("express");
const jwt = require('jsonwebtoken')
const userRoutes = require("./routerUser")
const productRoutes = require("./routesProduct")
const colaboratorRoutes = require("./routesColaborator");
const uploadRoutes =require('./routerUpload');
const UserController = require("../controller/userController");

const router = Router();

router.use('/image', uploadRoutes);
router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/colaborator', colaboratorRoutes);

router.post('/login', (req,res) =>{
    UserController.login(req,res)
});




module.exports = router;