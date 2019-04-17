import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DeliverQuesService } from '../deliver-ques.service';
import { QuestionComponent } from '../question/question.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SendanswersService } from '../sendanswers.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginRef :MatDialogRef<LoginComponent>,
    private _http : HttpClient,private ques : DeliverQuesService,
    private router : Router,
    private ans : SendanswersService,
    private auth : AuthService) { }

  ngOnInit() {
  }
  public login = {passkey : ""}
  public tlogin ={}
loginstudent(){
  //Authentcation remaining
  this.auth.checkStudent(this.login)
  .subscribe(
    data => {
      console.log(data.token)
      localStorage.setItem('token',data.token)

      this.loginRef.close();
   this.ques.passthekey(this.login.passkey)
    this.ans.sendstudentdata(this.login)
    setTimeout(()=>{
      this.router.navigate(['/instruction']);
    },500)
      }
  )
  

  
 
}
loginteacher()
{
  this.auth.checkTeacher(this.tlogin)
  .subscribe(
    data =>{
      console.log(data.token)
      localStorage.setItem('token',data.token)

      this.loginRef.close();
      this.router.navigate(['/teacherdash']);
    }
  )
  //Authentcation remaining
 

}


}
