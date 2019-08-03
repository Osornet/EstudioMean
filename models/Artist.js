'use strict'

const monsoose = require('mongoose');
var Schema = monsoose.Schema;


var ArtistSchema = Schema({
    name:String,
    description: String,
    image: String 
});


module.exports = monsoose.model('Artist', ArtistSchema);