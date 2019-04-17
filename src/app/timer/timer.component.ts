import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }
public hrs:number=0;
public seconds:number=0;
public min : number=0;
  ngOnInit() {
  }
  color = 'warn';
  mode = 'determinate';
  public value : number;
  public timerId = setInterval(() =>{
      this.seconds++;
      if(this.seconds==60)
      {
        this.seconds=0;
        this.min++;
      }
      if(this.min==60)
      {
        this.min=0;
        this.hrs++;
      }
      this.value=this.seconds*100/15;
   }, 1000);

   
}
