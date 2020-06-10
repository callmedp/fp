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
 public text ="Add Question"
 public color="primary"

   
  constructor(private testform : TestformService,private qinputdash : QinputdashService) { }
   

  @ViewChild('myform') ref :NgForm
  @ViewChild('ques') ques :NgForm
  @ViewChild('optiona') optiona :NgForm
  @ViewChild('optionb') optionb :NgForm
  @ViewChild('optionc') optionc :NgForm
  @ViewChild('optiond') optiond :NgForm
  @ViewChild("ans") ans :NgForm


  
  ngOnInit() {
    console.log(this.ques.touched)
    
   this.testform.datatransfer$
   .subscribe(
     passkey => { this.questiondata.passkey = passkey;}
   );
   
  }
 
  
  submitquestion()
  {
    if(this.ques.touched&&this.optiona.touched&&this.optionb.touched&&this.optionc.touched&&this.optiond.touched&&this.ans.touched&&this.ref.valid)
    {
      this.qinputdash.sendmessage(this.questiondata);
  
   console.log("question data read");
    this.testform.storequestion(this.questiondata)
    .subscribe(
      res =>{console.log(res);
        
      },
       err=>console.log(err)
    );
    this.color="warn"
    this.text="submitted"
   setTimeout(()=>{
    this.color="primary"
    this.text="Add Question"
    this.ref.reset()
   },500);


     
      
    }
   
  
  }
  

  
   
   

}
