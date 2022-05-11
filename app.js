/* Middleware */
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const handlebars = require("express-handlebars");
/* Rotas */
const cliente = require("./routes/Cliente")

/*Arquivos estáticos */
app.use(express.static('public'));

/* Middlewares */
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json());
app.use(express.json());

/* Rotas*/
const path = require('path');
const public = path.join(__dirname, 'public');


app.get("/", function(req, res){
    res.sendFile(path.join(public, '/Landing-page/index.html'));
})

/* Porta */
app.listen(8080, function() {
    console.log("Servidor funcionando na porta 8080")
})