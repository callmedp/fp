import { Component, OnChanges ,OnInit } from '@angular/core';
import { FetchqService } from '../fetchq.service';
import { QinputdashService } from '../qinputdash.service';


@Component({
  selector: 'app-test-dash',
  templateUrl: './test-dash.component.html',
  styleUrls: ['./test-dash.component.css']
})
export class TestDashComponent implements OnInit {
  
  public data =[]
  public temp : any
  constructor(private fetch :FetchqService,private qinputdash :QinputdashService) { }
 
ngOnInit(){
  console.log('probltm is here');
  this.qinputdash.datatransfer$
  .subscribe(
    questiondata =>{
    console.log('there');
    
    this.data.push(Object.assign({},questiondata));
    // console.log("The questiondata is ");
    // console.log(this.data);
  });

}

 
 /*
  fetchques()
 {
   this.fetch.fetchdata(this.data)
   .subscribe(
     res =>{console.log(res);
      this.qdata=res;
      console.log(this.qdata);
     
      
    },
     err=>console.log(err)
   );
  */
 //}

  

}
