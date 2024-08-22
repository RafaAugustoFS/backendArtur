const { Router } = require("express");
const userRoutes = require("./routerUser")
const productRoutes = require("./routesProduct")
const colaboratorRoutes = require("./routesColaborator")

const router = Router();



router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/colaborator', colaboratorRoutes);






module.exports = router;