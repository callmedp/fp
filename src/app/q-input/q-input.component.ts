import { Component, OnInit , ViewChild } from '@angular/core';
import { TestformService } from '../testform.service';
import { QinputdashService } from '../qinputdash.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-q-input',
  templateUrl: './q-input.component.html',
  styleUrls: ['./q-input.component.css']
})
export class QInputComponent implements OnInit {
 public questiondata={passkey : ""};
   
  constructor(private testform : TestformService,private qinputdash : QinputdashService) { }
   
  ngOnInit() {

   this.testform.datatransfer$
   .subscribe(
     passkey => { this.questiondata.passkey = passkey;}
   );
   
  }
  @ViewChild('refQues') ref :NgForm

  submitquestion()
  {
   this.qinputdash.sendmessage(this.questiondata);
   this.ref.reset();
   console.log("question data read");
    // this.testform.storequestion(this.questiondata)
    // .subscribe(
    //   res =>{console.log(res);
        
    //   },
    //    err=>console.log(err)
    // );
  
  }
  

  
   
   

}
