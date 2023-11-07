const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()


const Formation = require('../../models/formations');
const Quiz = require('../../models/quiz');
const Badges = require('../../models/badges');
const Participation = require('../../models/participation');



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

router.post('/addFormation' , jsonParser , (req,res,next)=>{
    if(!req.body){
        res.status(400).send({message:'Content cannot be empty'});
        return
    }
    const formation = new Formation({
        title: req.body.title,
        description : req.body.description,
        level: req.body.level,
        category: req.body.category
    })

    formation.save(formation).catch(err=>{
        res.status(500).send({
            message: err.message || 'some error occured'
        })
        res.status(200).send({message:'formation added'})
    })


})

router.put('/updateFormation' , jsonParser , (req,res,next)=>{
    
    if(!req.body){
        return res
        .status(400)
        .send({message : "Data to update cannot be empty"})
    }
    const id = req.body.id;
    Formation.findByIdAndUpdate(id , req.body ,{useFindAndModify : false})
    .then(data=>{
        if(!data){
            res.status(400).send({message : `Cannot update formation with ${id}. Maybe formation not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message : "Error updating formation information"})
    })
})

router.delete('/deleteformation', jsonParser , (req,res,next)=>{
    console.log(req.body)
    const id = req.body.id

    Formation.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message : "formation deleted successfully!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({message : "Could not delete formation with id: "+id})
    })
})






// Badges


router.get('/badges' , (req,res)=>{
    res.send("Welcome to badge route");
})

router.get('/getAllbadges' , (req,res , next)=>{
    Badges.find()
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

router.get('/getbadge', jsonParser , (req,res,next)=>{
    let id = req.body.id
    Badges.findById(id)
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

router.post('/addbadge' , jsonParser , (req,res,next)=>{
    if(!req.body){
        res.status(400).send({message:'Content cannot be empty'});
        return
    }
    const badge = new Badges({
        title: req.body.title,
        description : req.body.description,
        condition: req.body.condition,
    })

    badge.save(badge).catch(err=>{
        res.status(500).send({
            message: err.message || 'some error occured'
        })
        res.status(200).send({message:'formation added'})
    })


})

router.put('/updatebadge' , jsonParser , (req,res,next)=>{
    
    if(!req.body){
        return res
        .status(400)
        .send({message : "Data to update cannot be empty"})
    }
    const id = req.body.id;
    Badges.findByIdAndUpdate(id , req.body ,{useFindAndModify : false})
    .then(data=>{
        if(!data){
            res.status(400).send({message : `Cannot update badge with ${id}. Maybe badge not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message : "Error updating badge information"})
    })
})

router.delete('/deletebadge', jsonParser , (req,res,next)=>{
    console.log(req.body)
    const id = req.body.id

    Badges.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message : "badge deleted successfully!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({message : "Could not delete badge with id: "+id})
    })
})



//Quiz

router.get('/quiz' , (req,res)=>{
    res.send("Welcome to quiz route");
})

router.get('/getAllquizes' , (req,res , next)=>{
    Quiz.find()
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

router.get('/getquiz', jsonParser  , (req,res,next)=>{
    let id = req.body.id
    Quiz.findById(id)
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

router.post('/addquiz' , jsonParser , (req,res,next)=>{
    if(!req.body){
        res.status(400).send({message:'Content cannot be empty'});
        return
    }
    const quiz = new Quiz({
        title: req.body.title,
        description : req.body.description,
        nbr_questions: req.body.questions,
        time: req.body.time,
        formations_id : req.body.formation
    })

    quiz.save(quiz).catch(err=>{
        res.status(500).send({
            message: err.message || 'some error occured'
        })
        res.status(200).send({message:'quiz added'})
    })


})

router.put('/updatequiz' , jsonParser , (req,res,next)=>{
    
    if(!req.body){
        return res
        .status(400)
        .send({message : "Data to update cannot be empty"})
    }
    const id = req.body.id;
    Quiz.findByIdAndUpdate(id , req.body ,{useFindAndModify : false})
    .then(data=>{
        if(!data){
            res.status(400).send({message : `Cannot update quiz with ${id}. Maybe badge not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message : "Error updating quiz information"})
    })
})

router.delete('/deletequiz', jsonParser , (req,res,next)=>{
    console.log(req.body)
    const id = req.body.id

    Quiz.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message : "quiz deleted successfully!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({message : "Could not delete quiz with id: "+id})
    })
})


//Participations 


router.get('/participation' , (req,res)=>{
    res.send("Welcome to quiz route");
})

router.get('/getAllparticipations' , (req,res , next)=>{
    Participation.find()
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

router.get('/getparticipation', jsonParser  , (req,res,next)=>{
    let id = req.body.id
    Participation.findById(id)
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

router.post('/addparticipation' , jsonParser , (req,res,next)=>{
    if(!req.body){
        res.status(400).send({message:'Content cannot be empty'});
        return
    }
    const participation = new Participation({
        utilisateur_id: req.body.utilisateur,
        quiz_id : req.body.quiz,
        score: req.body.score
    })

    participation.save(participation).catch(err=>{
        res.status(500).send({
            message: err.message || 'some error occured'
        })
        res.status(200).send({message:'participation added'})
    })


})

router.put('/updateparticipation' , jsonParser , (req,res,next)=>{
    
    if(!req.body){
        return res
        .status(400)
        .send({message : "Data to update cannot be empty"})
    }
    const id = req.body.id;
    Participation.findByIdAndUpdate(id , req.body ,{useFindAndModify : false})
    .then(data=>{
        if(!data){
            res.status(400).send({message : `Cannot update participation with ${id}. Maybe participation not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message : "Error updating participation information"})
    })
})

router.delete('/deleteparticipation', jsonParser , (req,res,next)=>{
    console.log(req.body)
    const id = req.body.id

    Participation.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message : "participation deleted successfully!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({message : "Could not delete participation with id: "+id})
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
