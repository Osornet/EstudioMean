'use strict'

const mongoose = require("mongoose");
const app = require('./app');
const PORT = process.env.PORT || 3977;

//conexion a base de datos
mongoose.connect('mongodb://localhost:27017/curso_mean2', { useNewUrlParser: true },(err,res) =>{
    if(err){
        throw err;
    }else{
        console.log("la conexion a la base de datos esta funcionando correctamente...");

        app.listen(PORT,() => {
            console.log("Servidor api rest de musica escuchando en http://localhost:"+PORT);
        });
    }
});
