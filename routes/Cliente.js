const express = require('express')
const router = express.Router()
const cliente = require("../models/Cliente");

router.get("/api/listarcliente", (req, res) => {

    cliente.findAll().then((cliente) => {
        return res.json(cliente);
    })
})

router.delete("/api/excluircliente/:id", function (req, res) {
    cliente.destroy({where: {
        
    }})


router.get("/cliente", (req, res) => {

    res.render('cliente')

})

router.get("/cadastrarcliente", (req, res) => {

    res.render('cadcliente')
})

router.post("/cadastrarcliente", (req, res) => {

    if (req.body.nome != null || req.body.nome != undefined &&
        req.body.email != null || req.body.email != null &&
        req.body.endereco != null || req.body.endereco != null &&
        req.body.celular != null || req.body.celular != null) {

        cliente.create({
            nome: req.body.nome,
            email: req.body.email,
            cpf: req.body.cpf,
            cnpj: req.body.cnpj,
            endereco: req.body.endereco,
            complemento: req.body.complemento,
            cartaopostal: req.body.cartaopostal,
            estado: req.body.estado,
            cidade: req.body.cidade,
            telefone: req.body.telefone,
            celular: req.body.celular,
            website: req.body.website,
            contatos: req.body.contatos

        }).then(function () {
            res.status(200).redirect('cliente')

        })
    } else {
        res.redirect(404)
    }
})


})



module.exports = router