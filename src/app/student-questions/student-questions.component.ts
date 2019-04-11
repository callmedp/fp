import { Component, OnInit } from '@angular/core';
import { DeliverQuesService } from '../deliver-ques.service';

@Component({
  selector: 'app-student-questions',
  templateUrl: './student-questions.component.html',
  styleUrls: ['./student-questions.component.css']
})

export class StudentQuestionsComponent implements OnInit {

  constructor(private ques : DeliverQuesService) { }
  public questionset
  public noofques : number
  public index : number

  arr = new Array(this.noofques);

  ngOnInit() {
    this.ques.holder$.subscribe(data=>{
      this.questionset = data;
    })
    this.noofques=this.questionset.length
  }

  getbutton($event){
        this.index=$event;
  }

  saveinarray($event)
  {
    this.arr[$event.ind]=$event.fa;
    this.index=this.index+1;
  }
 
   
}
