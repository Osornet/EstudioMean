'use strict'

const monsoose = require('mongoose');
var Schema = monsoose.Schema;


var AlbumSchema = Schema({
    title:String,
    description: String,
    year: Number,
    image: String,
    artist: {type: Schema.ObjectId, ref: 'Artist'} 
});


module.exports = monsoose.model('Artist', AlbumSchema);