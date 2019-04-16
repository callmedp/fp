import { Component, OnInit } from '@angular/core';
import { TestformService } from '../testform.service';



@Component({
  selector: 'app-q-input',
  templateUrl: './q-input.component.html',
  styleUrls: ['./q-input.component.css']
})
export class QInputComponent implements OnInit {
    questiondata={passkey : ""};
   
  constructor(private testform : TestformService) { }
   



  
  ngOnInit() {

   this.testform.datatransfer$
   .subscribe(
     passkey => { this.questiondata.passkey = passkey;}
   );
   
  }
  submitquestion()
  {

    this.testform.storequestion(this.questiondata)
    .subscribe(
      res =>{console.log(res);
        
      },
       err=>console.log(err)
    );
  }
  

  
   
   

}
