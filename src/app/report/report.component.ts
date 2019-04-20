import { Component, OnInit } from '@angular/core';
import { SendanswersService } from '../sendanswers.service';
import { TempdataService } from '../tempdata.service';
export interface sometype {
  stname: string;
 score : number
 
 
}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})



export class ReportComponent implements OnInit {
  displayedColumns = [ 'stname','score'];
 
public passkey;


 
 dataSource :sometype



  constructor(
    private temp : TempdataService) { }

  ngOnInit() {
    this.temp.infoholder.subscribe((data : sometype)=>{
      this.dataSource = data
     
     
    })
   

    
  }
 
}
