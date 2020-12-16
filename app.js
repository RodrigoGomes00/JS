const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const moment = require('moment')
const clientes = require("./models/clientes")


app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
    }
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/clientes', function(req, res){
    clientes.findAll({order: [['id', 'DESC']]}).then(function(clientes){
        res.render('clientes', {clientes: clientes});
    })
});

app.get('/cad_cliente', function(req, res){
    res.render('cad_cliente');
});

app.post('/add-cliente', function(req, res){
    clientes.create({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        cep: req.body.cep,
        logradouro: req.body.logradouro,
        numero: req.body.numero,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado
    }).then(function(){
        res.redirect('/clientes')
        //res.send("Cliente cadastro com sucesso!")
    }).catch(function(erro){
        res.send("Erro: Cliente não foi cadastrado com sucesso!" + erro)
    })
})

app.get('/del-cliente/:id', function(req, res){
    clientes.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        res.redirect('/clientes');
        /*res.send("Cliente apagado com sucesso!");*/
    }).catch(function(erro){
        res.send("Cliente não apagado com sucesso!");
    })
});

app.listen(8080);