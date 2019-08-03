'use strict'

const express = require('express');
const bodyParser = require('body-parser');


var app = express();

//midderwares

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//configuracion de cabeceras http


//rutas base
app.get('/pruebas', (reg, res) =>{
    res.status(200).send({message: 'respuesta de prueba'});
})

    
module.exports = app;