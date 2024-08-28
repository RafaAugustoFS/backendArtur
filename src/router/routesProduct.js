const { Router } = require("express");
const ProductController = require("../controller/productController")
const { validateProductId, validateProduct } = require("../middlewares/validadeProduct")
const router = Router();

/*Produto */
router.post('/', validateProduct, (req, res) =>{
    ProductController.create(req, res)
})

router.get('/', (req, res) =>{
    ProductController.getAll(req, res)
})

router.delete('/:id', validateProductId, (req, res) =>{
    ProductController.delete(req, res)
})

router.put('/:id', validateProductId, validateProduct, (req, res) =>{
    ProductController.update(req, res)
})

router.get('/:id', validateProductId, (req, res) =>{
    ProductController.getOne(req, res)
})

module.exports = router;