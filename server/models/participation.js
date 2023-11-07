const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ParticipationSchema = new Schema({
    utilisateur_id:{
        type: String,
        required: true
    },
    quiz_id:{
        type: String,
        required: true
    },
    score:{
        type:Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('participation' , ParticipationSchema);