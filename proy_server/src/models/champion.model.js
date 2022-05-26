const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ChampionSchema = Schema({
    name:{
        type:String,
        require: true
    },

    surname:{
        type:String,
        require: true
    },

    passive:{
        type:String,
        require: true
    },

    race:{
        type:String,
        require: true
    },

    role:{
        type:String,
        require: true
    },

});

module.exports = mongoose.model("Champion",ChampionSchema);