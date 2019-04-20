import { Component, OnInit } from '@angular/core';
import { SendanswersService } from '../sendanswers.service';
import { TempdataService } from '../tempdata.service';
export interface PeriodicElement {
  stname: string;
 score : number
 
 
}


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})



export class ReportComponent implements OnInit {
  displayedColumns: string[] = [ 'stname','score'];
 
public passkey;
data ={ passkey :this.passkey}
public scorearr 
 ELEMENT_DATA: PeriodicElement[] = this.scorearr
 dataSource = this.ELEMENT_DATA;



  constructor(private sendans : SendanswersService,
    private temp : TempdataService) { }

  ngOnInit() {
    this.temp.infoholder.subscribe(passkey =>{
      this.passkey = passkey;

      this.sendans.getScores(this.data).subscribe(
        scorearr =>{
          this.scorearr = scorearr
  
        }
      )

    })

    
  }
 
}
