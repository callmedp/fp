import { Component, OnInit } from '@angular/core';
import { FetchqService } from '../fetchq.service';


@Component({
  selector: 'app-test-dash',
  templateUrl: './test-dash.component.html',
  styleUrls: ['./test-dash.component.css']
})
export class TestDashComponent implements OnInit {
  data ={
    passkey : "sart"
  }
  
  qdata = []
  constructor(private fetch :FetchqService) { }

  ngOnInit() {
  }
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
   
 }

  

}
