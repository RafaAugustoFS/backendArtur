const { Router } = require("express");
const ColaboratorController = require("../controller/colaboratorController")
const { validateColaborator, validateColaboratorId } = require("../middlewares/validateColaborator")
const router = Router();

/*Colaboradores */
router.post('/colaborator/', validateColaborator, (req, res) =>{
    ColaboratorController.create(req, res)
})

router.get('/colaborator/', (req, res) =>{
    ColaboratorController.getAll(req, res)
})

router.delete('/colaborator/:id', validateColaboratorId, (req, res) =>{
    ColaboratorController.delete(req, res)
})

router.put('/colaborator/:id', validateColaboratorId, validateColaborator, (req, res) =>{
    ColaboratorController.update(req, res)
})

router.get('/colaborator/:id', validateColaboratorId, (req, res) =>{
    ColaboratorController.getOne(req, res)
})

module.exports = router;