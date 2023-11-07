const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FormationSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true 
    },
    level:{
        type:String,
        required: true
    },
    category:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('formation' , FormationSchema);