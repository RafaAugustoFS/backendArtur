const { Router } = require("express");
const UserController = require("../controller/userController")
const { validateUser, validateUserId } = require("../middlewares/validateUser")

const router = Router();

/*Usuários */
router.post('/', validateUser, (req, res) =>{
    UserController.create(req, res)
})

router.get('/', (req, res) =>{
    UserController.getAll(req, res)
})

router.delete('/:id', validateUserId, (req, res) =>{
    UserController.delete(req, res)
})

router.put('/:id', validateUserId, validateUser, (req, res) =>{
    UserController.update(req, res)
})

router.get('/:id', validateUserId, (req, res) =>{
    UserController.getOne(req, res)
})

module.exports = router;