const { Router } = require("express");
const UserController = require("../controller/userController")
const { validateUser, validateUserId } = require("../middlewares/validateUser")

const router = Router();

/*Usuários */
router.post('/user', validateUser, (req, res) =>{
    UserController.create(req, res)
})

router.get('/user/', (req, res) =>{
    UserController.getAll(req, res)
})

router.delete('/user/:id', validateUserId, (req, res) =>{
    UserController.delete(req, res)
})

router.put('/user/:id', validateUserId, validateUser, (req, res) =>{
    UserController.update(req, res)
})

router.get('/user/:id', validateUserId, (req, res) =>{
    UserController.getOne(req, res)
})

module.exports = router;