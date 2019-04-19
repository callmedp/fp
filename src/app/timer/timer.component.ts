import { Component, OnInit, Input } from '@angular/core';
import { SendanswersService } from '../sendanswers.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private ans : SendanswersService) { }
public hr:number=0;
public sec:number=0;
public min : number=0;
public time : number
@Input() passkey:number;
  ngOnInit() {
  }
  color = 'warn';
  mode = 'determinate';
  public value : number;
  public timerId = setInterval(() =>{
    this.ans.getMetaData(this.passkey).subscribe(meta=>{
   // this.time=this.meta.time.hr*3600 +this.meta.time.min*60+this.meta.time.sec;
    this.sec++;
    if(this.sec==60)
    {
      this.sec=0;
      this.min++;
      if(this.min==60)
      {
        this.min=0;
        this.hr++;
      }
      this
    }
    this.value=this.time*100/this.time;
    })
     
   }, 1000);

   
}
