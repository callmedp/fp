import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DeliverQuesService } from '../deliver-ques.service';
import { Router } from '@angular/router';
import { SendanswersService } from '../sendanswers.service';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
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

    public diameter = 1

  ngOnInit() {
  }
  public login = {passkey : ""}
  public tlogin ={}
  public hide : boolean =true
  public thide : boolean =true
  spinner = false
loginstudent(ref : NgForm){
  //Authentcation remaining
  console.log(ref)
  this.spinner = true
  this.auth.checkStudent(this.login)
  .subscribe(
    data => {
      console.log(data.token)
      localStorage.setItem('token',data.token)
         this.spinner = false
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
