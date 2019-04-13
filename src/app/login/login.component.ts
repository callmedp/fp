import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DeliverQuesService } from '../deliver-ques.service';
import { QuestionComponent } from '../question/question.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginRef :MatDialogRef<LoginComponent>,
    private _http : HttpClient,private ques : DeliverQuesService,
    private router : Router) { }

  ngOnInit() {
  }
  public login = {passkey : ""}
  public tlogin ={}
loginstudent(){
  //Authentcation remaining
  this.loginRef.close();
  this.ques.passthekey(this.login.passkey)
  setTimeout(()=>{
    this.router.navigate(['/instruction']);
  },500)

  
 
}
loginteacher()
{
  //Authentcation remaining
  this.loginRef.close();
  this.router.navigate(['/teacherdash']);

}


}
