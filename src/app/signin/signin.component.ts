import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private signinRef :MatDialogRef<SigninComponent>,
    private auth : AuthService,
    private router : Router) { }

  ngOnInit() {
  }
 studentdata={};
 teacherdata={};

 signupstudent()
 {
   this.auth.storeStudent(this.studentdata)
   .subscribe(
     res =>{console.log(res);
      this.signinRef.close();
      localStorage.setItem('token',res.token)
      this.router.navigate(['/']);
      
    },
     err=>console.log(err)
   );
   
 }
 signupteacher()
 {
  this.auth.storeTeacher(this.teacherdata)
  .subscribe(
    res =>{console.log(res);
      this.signinRef.close();
      localStorage.setItem('token',res.token)
      this.router.navigate(['/teacherdash']);
    },
     err=>console.log(err)
  );
  
  
 }





}
