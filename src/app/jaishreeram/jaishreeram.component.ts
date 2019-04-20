import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
//import { StudentQuestionsComponent } from '../student-questions/student-questions.component';

@Component({
  selector: 'app-jaishreeram',
  templateUrl: './jaishreeram.component.html',
  styleUrls: ['./jaishreeram.component.css']
})
export class JaishreeramComponent implements OnInit {

  constructor(private diaogRef :MatDialogRef<JaishreeramComponent>) { }

  ngOnInit() {
  }

  onclose()
  { 
    
    this.diaogRef.close();
  }
  onsubmit()
  {
   // this.sq.submit();
    this.diaogRef.close();
  }

}
