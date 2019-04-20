import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TempdataService } from '../tempdata.service';
import { Router } from '@angular/router';
import { SendanswersService } from '../sendanswers.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  constructor(private diaogRef :MatDialogRef<DialogboxComponent>,
    private temp :TempdataService,
    private router : Router,
    private sendans :SendanswersService) { }
  public passkey="";

  ngOnInit() {
  }
  onclose()
  {
    this.diaogRef.close();
  }
  onsubmit()
  {
    this.sendans.getScores({passkey : this.passkey}).subscribe(
      scorearr =>{
        console.log(scorearr);
        this.temp.sendreport(scorearr);
       
        this.diaogRef.close();
        this.router.navigate(['/report'])
      }
    )

  }

}
