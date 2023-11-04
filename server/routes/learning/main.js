const express = require('express');
const router = express.Router();


//Routes

router.get('/learning' , (req,res)=>{
    res.send("Welcome to learning route");
})

module.exports = router;