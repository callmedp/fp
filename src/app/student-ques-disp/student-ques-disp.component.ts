import { Component, OnInit, Input,Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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
public togg : boolean = false
@Input() quesleng : number
@ViewChild('options') options : NgForm
@Output() Answerevent = new EventEmitter();
@Output() indexback = new EventEmitter();
@Output() indexnext = new EventEmitter();
public finalans
public sendobj ={
  fa : " ",
  ind : 1
}

ansary=[]

ngOnInit() {
  console.log(this.togg)
  for(let i=0;i<this.quesleng;i++)
  {
    this.ansary.push(false)
  }
  console.log(this.index)
  }
  deSelect(){
    if(this.ansary[this.index]!=false)
    this.ansary[this.index]=false
  }
  submit()
  { 
    
    console.log(this.ansary)
    this.Answerevent.emit(this.ansary)

  }
  back(){
    this.indexback.emit();
  }

  next(){
    this.indexnext.emit();
  }
}
