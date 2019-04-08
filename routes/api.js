var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Testdata = require('../modals/test-data');
var Question = require('../modals/question');
router.get('/',function(req,res){
    res.send("this is from api");
});


router.post('/testdata',function(req,res){ 
    var userdata = req.body;
    var passkey = userdata.passkey;
    console.log(userdata);
    var testdata = new Testdata(userdata);
   
    url='mongodb+srv://sarthak:test@cluster0-vvw6t.mongodb.net/'+passkey+'?retryWrites=true';
   
    mongoose.connect(url,{useNewUrlParser:true},(err)=>{
        if(err)
        console.log(err);
        else
        {   console.log("mongodb connected");
            testdata.save((err,reguser)=>{
                        if(err)
                        console.log(err);
                        else
                        console.log('success');
                       
                    });

                   
            }
            
                    
                   
        

    });
    
});

router.post('/loadquestion',function(req,res){
    var quesdata = req.body;
    var passkey = quesdata.passkey;
    

    url='mongodb+srv://sarthak:test@cluster0-vvw6t.mongodb.net/'+passkey+'?retryWrites=true';
   

    var question = new Question(quesdata);
    mongoose.connect(url,{useNewUrlParser:true},(err)=>{
        if(err)
        console.log(err);
        else
        {   console.log("mongodb connected");
            question.save((err,reguser)=>{
                if(err)
                return 'error';
                else
                return "success";
               
            });

        }
    })
    

});


module.exports = router;