import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliverQuesService } from '../deliver-ques.service';


@Component({
  selector: 'app-instruction-page',
  templateUrl: './instruction-page.component.html',
  styleUrls: ['./instruction-page.component.css']
})
export class InstructionPageComponent implements OnInit {

  constructor(private router : Router , private ques : DeliverQuesService) { }
 public questionset
 public key ={passkey : ''}
  ngOnInit() {
    console.log("kuch bhi 0")
    this.ques.infoholder1.subscribe(passkey=>{
      console.log("kuch")
      this.key.passkey=passkey
      console.log(this.key.passkey)
      
      this.ques.getQuestions(this.key).subscribe(data =>{
        this.questionset = data;
        console.log(this.questionset)
        this.ques.passQuestions(this.questionset);
    })
   
    })
  
  }


  movetostudentdisplay()
  {
    this.router.navigate(['/studentdips']);
  }

}
