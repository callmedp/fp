var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Testdata = require('../modals/test-data');
var Question = require('../modals/question');
var Signupst = require('../modals/signupst');
var SaveAnswers =require('../modals/saveanswer')
var SignupTeacher = require('../modals/signupTeacher');
var jwt = require('jsonwebtoken')
router.get('/',function(req,res){
    res.send("this is from api");
});



function verifyToken(req,res,next){
    console.dir(req)
    if(!req.headers.authorization)
    {
        return res.status(401).send('unauthorized request')

    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null')
    {
        return res.status(401).send('unauthorised request')

    }
    let payload = jwt.verify(token,"sarthakkey")
    if(!payload)
    return res.status(401).send('unauthorised request')
    req.userId=payload.subject
    next()
}

router.post('/verify',verifyToken,function(req,res){
    console.log('verified');
})


router.post('/testdata',verifyToken,function(req,res){ 
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

router.post('/loadquestion',verifyToken,function(req,res){
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

router.post('/retrieveQuestions',verifyToken,function(req,res){
    var passkey = req.body.passkey;

    url='mongodb+srv://sarthak:test@cluster0-vvw6t.mongodb.net/'+passkey+'?retryWrites=true';
      
    mongoose.connect(url,{useNewUrlParser:true},(err)=>{
        if(err)
        console.log(err);
        else
        {   console.log("mongodb connected");
            Question.find({},(error,response)=>{
                if(error)
                console.log(error)
                else
                {
                    res.status(200).send(response);
                }
    })
}
   
});
})


//4

router.post('/studentsignup',function(req,res){
    var stdata = req.body;
    url='mongodb+srv://sarthak:test@cluster0-vvw6t.mongodb.net/student?retryWrites=true';
    signupst = new Signupst(stdata);
    mongoose.connect(url,{useNewUrlParser:true},(err)=>{
        if(err)
        console.log(err);
        else
        {   console.log("mongodb connected");
            signupst.save((err,reguser)=>{
                if(err)
                console.log(err);
                else
                {
                    var payload = { subject : reguser._id }
                            var token = jwt.sign(payload , "sarthakkey")
                            res.status(200).send({token})
                }
            });

        }
    })
   
});

//5 

router.post('/teachersignup',function(req,res){
    var tdata = req.body;
    url='mongodb+srv://sarthak:test@cluster0-vvw6t.mongodb.net/teacher?retryWrites=true';
    signupteacher = new SignupTeacher(tdata);
    mongoose.connect(url,{useNewUrlParser:true},(err)=>{
        if(err)
        console.log(err);
        else
        {   console.log("mongodb connected");
            signupteacher.save((err,reguser)=>{
                if(err)
                console.log(err);
                else
               {
                var payload = { subject : reguser._id }
                var token = jwt.sign(payload , "sarthakkey")
                res.status(200).send({token})
               }
            });

        }
    })
   
});

// 6 login st

router.post('/loginstudent',function(req,res){
    var logindata = req.body;
    url='mongodb+srv://sarthak:test@cluster0-vvw6t.mongodb.net/student?retryWrites=true';
    console.log(logindata)

    mongoose.connect(url,{useNewUrlParser:true},(err)=>{
        if(err)
        console.log(err);
        else
        {   console.log("mongodb connected");
            Signupst.findOne({stname : logindata.username },(err,reguser)=>{
                if(err)
                console.log(err);
                else{
                    console.log(reguser);
                    if(!reguser || reguser.stpass!=logindata.password)
                        res.status(401).send("Invalid username or password")
                    else
                        {
                            var payload = { subject : reguser._id }
                            var token = jwt.sign(payload , "sarthakkey")
                            res.status(200).send({token})

                        }
                }
            });
        }
    })
   
});

router.post('/Answers',verifyToken,function(req,res){
    let passkey = req.body.passkey;
    console.log("running")
    console.log(req.body)
    url='mongodb+srv://sarthak:test@cluster0-vvw6t.mongodb.net/'+passkey+'?retryWrites=true';
    var data = {
        stname : req.body.stname,
        answers : req.body.answers
    }
    console.log(data);
    saveAnswers = new SaveAnswers(data)
    mongoose.connect(url,{useNewUrlParser:true},(err)=>{
        if(err)
        console.log(err);
        else
        {   console.log("mongodb connected");
             saveAnswers.save((err,response)=>{
                if(err)
                console.log(err)
                else
              
                {
                    res.status(200).send('submitted');
                    console.log(response);
                    
                }
             })

            



        }
    })
   
});




// 7 login teacher

router.post('/loginteacher',function(req,res){
    var logindata = req.body;
    url='mongodb+srv://sarthak:test@cluster0-vvw6t.mongodb.net/teacher?retryWrites=true';
    
    mongoose.connect(url,{useNewUrlParser:true},(err)=>{
        if(err)
        console.log(err);
        else
        {   console.log("mongodb connected");
            SignupTeacher.findOne({tid : logindata.id},(err,reguser)=>{
                if(err)
                console.log(err);
                else{
                    if(!reguser || reguser.tpass!=logindata.password)
                        res.status(401).send('Username or password invalid')
                    else
                       {
                        var payload = { subject : reguser._id }
                        var token = jwt.sign(payload , "sarthakkey")
                        res.status(200).send({token})
                       }
                    }
            });
        }
    })
   
});

// 8




module.exports = router;