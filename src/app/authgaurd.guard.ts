import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {

  constructor (private auth : AuthService ,
    private router : Router){}
  canActivate():boolean{
    if(this.auth.loggedIn() && this.auth.verifyinback())
    {
      return true;
    }
    else
    {
      this.router.navigate(['/'])
      return false;
    }
    
  }
  
}
