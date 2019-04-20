import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TempdataService } from '../tempdata.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  constructor(private diaogRef :MatDialogRef<DialogboxComponent>,
    private temp :TempdataService) { }
  public passkey="";

  ngOnInit() {
  }
  onclose()
  {
    this.diaogRef.close();
  }
  onsubmit()
  {
    this.temp.sendpasskey(this.passkey)

    
  }

}
