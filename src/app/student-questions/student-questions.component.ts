import { Component, OnInit } from '@angular/core';
import { DeliverQuesService } from '../deliver-ques.service';
import { SendanswersService } from '../sendanswers.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-student-questions',
  templateUrl: './student-questions.component.html',
  styleUrls: ['./student-questions.component.css']
})

export class StudentQuestionsComponent implements OnInit {

  constructor(private ques : DeliverQuesService,
    private ans : SendanswersService,
    private router : Router,
   
   
) { }
  public questionset
  public noofques : number
  public index : number = 0;
  public submitdata ={
    stname : "",
    answers : [],
    passkey : " "
  }
public login ={ username : "",
                password : "",
              passkey : ""
            }
  arr = []
  public callsubmitdisp=false
  





  ngOnInit() {
    this.ques.infoholder.subscribe(data=>{
      console.log("The data is")
      this.questionset = data;
      this.noofques=this.questionset.length
      console.log(this.questionset)

      this.ans.infoholder.subscribe(data =>
        {
          this.login = data

        })
      // for(let i=0;i<this.noofques;i++){
      //   this.arr.push(false)
      // }
    })
   
  
  }

  getbutton($event){
    
        this.index=$event;
        console.log('student ques index')
        console.log(this.index)
  }

  saveinarray($event)
  {
    // console.log($event)
    // this.arr[$event.ind]=$event.fa;
    // if(this.index<this.noofques-1)
    // this.index=this.index+1;
    // else 
    //  this.index=0;
    // console.log(this.arr)
    this.arr=$event.slice()

  }
  decrement(){
      if(this.index== 0){
        this.index=this.noofques-1;
      }
      else{
        this.index=this.index-1;
      }
  }

  increment(){
    if(this.index== this.noofques-1){
      this.index=0;
    }
    else{
      this.index=this.index+1;
    }
}


  submit()
  { 
    this.callsubmitdisp=true

    this.submitdata.stname = this.login.username
    this.submitdata.answers = this.arr
    this.submitdata.passkey = this.login.passkey
    this.ans.saveAns(this.submitdata).subscribe(message=>{
      
      this.router.navigate(['/score', this.login.username,  this.login.passkey]);
  })
  }


 
   
}
