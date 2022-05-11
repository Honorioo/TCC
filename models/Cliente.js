const db = require('../config/db')

const Cliente = db.sequelize.define('clientes' ,{

    nome: {
        type: db.Sequelize.STRING
     },
    email: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    cnpj: {
        type: db.Sequelize.STRING
    },
    endereco: {
        type: db.Sequelize.STRING
    },
    complemento: {
        type: db.Sequelize.STRING
    },
    cartaopostal: {
        type: db.Sequelize.STRING
    },
    estado: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    celular: {
        type: db.Sequelize.STRING
    },
    website: {
        type: db.Sequelize.STRING
    },
    contatos: {
        type: db.Sequelize.STRING
    }
});


module.exports = Cliente