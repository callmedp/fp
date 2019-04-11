import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DeliverQuesService } from '../deliver-ques.service';
import { QuestionComponent } from '../question/question.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginRef :MatDialogRef<LoginComponent>,
    private _http : HttpClient,private ques : DeliverQuesService) { }

  ngOnInit() {
  }
  public login = {key : ""}
  public questionset
loadQuestions(){
  //Router to Instruction page
  this.ques.getQuestions(this.login.key).subscribe(data =>{
    this.questionset = data;
  })
  this.ques.passQuestions(this.questionset);
}


}
