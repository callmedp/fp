import { Component, OnInit, Input } from '@angular/core';
import { SendanswersService } from '../sendanswers.service';
import { DeliverQuesService } from '../deliver-ques.service';



@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private ans : SendanswersService,
    private ques : DeliverQuesService) { }
public hr:number=0;
public sec:number=0;
public tothr : number
public min : number=0;
public time : number
public totalsec :number =0
public duration
color = 'warn';
mode = 'determinate';
public value : number;
public timerId 
  ngOnInit() {
   
    this.ques.infoholder2.subscribe(meta=>{
      this.duration=meta.duration
    })
 
  this.timerId = setInterval(() =>{
    this.time=this.duration*3600 ;
    this.tothr=this.duration
      this.totalsec++;
      this.sec++
      if(this.sec==60)
      {
        this.sec=0;
        this.min++;
        if(this.min==60)
        {
          this.min=0;
          this.hr++;
        }
      }
      this.value=this.totalsec*100/this.time;
     
       console.log("timer tiktok" + this.min+ "/" +this.sec)
     }, 1000);
  
  }
 
   
}
