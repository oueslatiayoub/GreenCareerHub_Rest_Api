const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()


const Formation = require('../../models/formations');
const Quiz = require('../../models/quiz');
const Badges = require('../../models/badges');



//Routes
router.get('/formation' , (req,res)=>{
    res.send("Welcome to formation route");
})

router.get('/getAllformation' , (req,res , next)=>{
    Formation.find()
    .then(response=>{
        res.json({
            response
        })
    }).catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
})

router.get('/getfromation', jsonParser , (req,res,next)=>{
    let formationId = req.body.id
    Formation.findById(formationId)
    .then(response=>{
        res.json({
            response
        })
    }).catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
})






// function insertFromationData(){
//     Quiz.insertMany([
//         {
//             title:'quiz 1',
//             description:'desc',
//             nbr_questions:3,
//             time: 30,
//             formation_id: 'test'
//         },
//         {
//             title:'quiz 2',
//             description:'desc',
//             nbr_questions:3,
//             time: 30,
//             formation_id: 'test'
//         },
//         {
//             title:'quiz 3',
//             description:'desc',
//             nbr_questions:3,
//             time: 30,
//             formation_id: 'test'
//         },
        
// ])
// }

// insertFromationData()

module.exports = router;
