var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Testdata = require('../modals/test-data');
var Question = require('../modals/question');
var Signupst = require('../modals/signupst');
var SaveAnswers =require('../modals/saveanswer')
var SignupTeacher = require('../modals/signupTeacher');
var Report = require ('../modals/report');


router.post('/calculateans',function(req,res){ 
    var userdata = req.body;
    var passkey = userdata.passkey;
    console.log('this is user data')
    console.log(userdata);
   
   
    url='mongodb+srv://sarthak:test@cluster0-vvw6t.mongodb.net/'+passkey+'?retryWrites=true';
   
    mongoose.connect(url,{useNewUrlParser:true},(err)=>{
        if(err)
        console.log(err);
        else
        {   console.log("mongodb connected");
           SaveAnswers.findOne({stname : userdata.username},(err,Ares)=>{
               if(err)
               {
                   console.log(err);
                
               }
               else
               {  console.log(Ares);
                   Question.find({},(err,Qres)=>{
                       if(err)
                       console.log(err);
                       else
                       { console.log(Qres)
                           var l = Qres.length
                           var score  = 0;
                           var checkedans = new Array(l);
                           //var a = new Array(10);
                           for(var i=0;i<l ;i=i+1)
                           {
                               /* 
                               */
                               if((Ares.answers[i]!=null)&& Ares.answers[i]==Qres[i].answer)
                                {
                                    score=score +1;
                                    checkedans[i]=true;
                                }
                                else
                                {
                                    checkedans[i]=false;
                                }
                           }

                           var senddata ={
                               stname : userdata.username,
                               checkedans : checkedans,
                               score : score
                           }

                           var report = new Report(senddata);
                           report.save((err,reportStudent)=>{
                               if(err)
                               {
                                   console.log(err);
                               }
                               else
                               {
                                   res.status(200).send(reportStudent);
                                   console.log(reportStudent);
                               }
                           })





                           
                       }

                   });
               }
           });


           
                   
         }
            
                    
                   
        

    });
    
});





router.post('/getMetaData',function(req,res){ 
    var userdata = req.body;
    var passkey = userdata.passkey;
    console.log(userdata);
   
    url='mongodb+srv://sarthak:test@cluster0-vvw6t.mongodb.net/'+passkey+'?retryWrites=true';
   
    mongoose.connect(url,{useNewUrlParser:true},(err)=>{
        if(err)
        console.log(err);
        else
        {   console.log("mongodb connected");
            Testdata.findOne({},(err,data)=>{
                if(err)
                console.log(err)
                else
                {
                    res.status(200).send(data)
                    console.log(data)
                }
            })

                   
            }
            
                    
                   
        

    });
    
});

module.exports = router;
