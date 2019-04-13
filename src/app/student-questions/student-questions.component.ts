import { Component, OnInit } from '@angular/core';
import { DeliverQuesService } from '../deliver-ques.service';
import { QuestionComponent } from '../question/question.component';
import { SendanswersService } from '../sendanswers.service';

@Component({
  selector: 'app-student-questions',
  templateUrl: './student-questions.component.html',
  styleUrls: ['./student-questions.component.css']
})

export class StudentQuestionsComponent implements OnInit {

  constructor(private ques : DeliverQuesService,
    private ans : SendanswersService) { }
  public questionset
  public noofques : number
  public index : number = 0;
  public submitdata ={
    stname : "",
    answers : [""]
  }

  arr = new Array(this.noofques);

  ngOnInit() {
    this.ques.infoholder.subscribe(data=>{
      console.log("The data is")
      this.questionset = data;
      this.noofques=this.questionset.length
      console.log(this.questionset)
    })
   
  
  }

  getbutton($event){
    
        this.index=$event;
        console.log('student ques index')
        console.log(this.index)
  }

  saveinarray($event)
  {
    console.log($event)
    console.log("st-ques-saveinarray se")
    this.arr[$event.ind]=$event.fa;
    this.index=this.index+1;
    console.log(this.arr)
  }
  submit()
  {
    this.submitdata.stname = "sarthak"
    this.submit.answers = this.arr.slice()

    this.ans.saveAns(this.submitdata)


  }
 
   
}
