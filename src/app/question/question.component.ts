import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() Question = {
    question : String,
    optiona : String,
    optionb : String,
    optionc : String,
    optiond : String,
    passkey :String,
    answer : String


  }
  @Input()  questionno  :number

  constructor() { }

  ngOnInit() {
  }

}
