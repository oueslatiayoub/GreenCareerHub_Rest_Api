const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true 
    },
    nbr_questions:{
        type: Number,
        required: true
    },
    time:{
        type: Number,
        required: true,
    },
    formation_id:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('quiz' , QuizSchema);