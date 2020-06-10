import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliverQuesService } from '../deliver-ques.service';
import { SendanswersService } from '../sendanswers.service';

export interface metadata {
  testname :string,
  passkey :string,
  duration :string,
  no_of_ques :Number
}
@Component({
  selector: 'app-instruction-page',
  templateUrl: './instruction-page.component.html',
  styleUrls: ['./instruction-page.component.css']
})
export class InstructionPageComponent implements OnInit {

  constructor(private router : Router , private ques : DeliverQuesService,
    private ans : SendanswersService) { }
 public questionset
 public key ={passkey : ''}
 public disabled : boolean = true
  ngOnInit() {
    this.ques.infoholder1.subscribe(passkey=>{
      this.key.passkey=passkey
      console.log("this is passkey",this.key.passkey)
      this.ans.getMetaData(this.key.passkey).subscribe((meta : metadata)=>{
        this.ques.passMeta(meta)
      })
      this.ques.getQuestions(this.key).subscribe(data =>{
        this.questionset = data;
        console.log(this.questionset)
        this.ques.passQuestions(this.questionset);
        this.disabled=false
    })
   
    })
  
  }


  movetostudentdisplay()
  {
    this.router.navigate(['/studentdips']);
  }

}
