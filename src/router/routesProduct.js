const ProductController = require("../controller/productController")
const { validateProductId, validateProduct } = require("../middlewares/validadeProduct")

/*Produto */
router.post('/product', validateProduct, (req, res) =>{
    ProductController.create(req, res)
})

router.get('/product', (req, res) =>{
    ProductController.getAll(req, res)
})

router.delete('/product/:id', validateProductId, (req, res) =>{
    ProductController.delete(req, res)
})

router.put('/product/:id', validateProductId, validateProduct, (req, res) =>{
    ProductController.update(req, res)
})

router.get('/product/:id', validateProductId, (req, res) =>{
    ProductController.getOne(req, res)
})
