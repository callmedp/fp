import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-ques-disp',
  templateUrl: './student-ques-disp.component.html',
  styleUrls: ['./student-ques-disp.component.css']
})
export class StudentQuesDispComponent implements OnInit {

  constructor() { }
  
// public questionNo:number=4;
// public options : string[]=['option 1','option 2','option 3','option 4']
// public putYourQuestionsOutHere:String="You could not live with your own failures Where did it brings you Back to me" 
@Input() currentQuestion  
@Input() index : number
@Output() Answerevent = new EventEmitter();
public finalans
public sendobj ={
  fa : " ",
  ind : 1
}


ngOnInit() {
  console.log('ques ka index ye hai')
  console.log(this.index)
  }
  saveandnext()
  { 
    this.sendobj.fa  =this.finalans
   this.sendobj.ind = this.index


    this.Answerevent.emit(this.sendobj);
    

  }

}
