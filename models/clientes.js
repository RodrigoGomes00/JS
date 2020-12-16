const db = require('./db')

const Clientes = db.sequelize.define('clientes', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.BIGINT
    },
    telefone: {
        type: db.Sequelize.BIGINT
    },
    cep: {
        type: db.Sequelize.INTEGER
    },
    logradouro: {
        type: db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.STRING
    },
    bairro: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    estado: {
        type: db.Sequelize.STRING
    }
})

//Criar a tabela
//Clientes.sync({force: true})

module.exports = Clientes