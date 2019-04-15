import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-set',
  templateUrl: './question-set.component.html',
  styleUrls: ['./question-set.component.css']
})
export class QuestionSetComponent implements OnInit {

  constructor() { }
  @Input() quesno :number
  res = [];
  i: number = 1;
  ngOnInit() {
    for (this.i = 1; this.i <= this.quesno; this.i++) {
      this.res.push(this.i);
    }
    console.log(this.res)
  }
  @Output() messageevent =new EventEmitter()
  getques(index)
  {
    console.log(index);
   this.messageevent.emit(index)
  }
  
}
