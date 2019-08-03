'use strict'

const monsoose = require('mongoose');
var Schema = monsoose.Schema;


var UserSchema = Schema({
    name:String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String 
});


module.exports = monsoose.model('User', UserSchema);