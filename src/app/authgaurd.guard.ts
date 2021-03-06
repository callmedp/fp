
import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthgaurdGaurd implements CanActivate {

  constructor(private router :Router,
    private auth : AuthService) {}

  canActivate(): boolean {
    if(this.auth.loggedIn())
    {
      return true
    }
    else
    { this.router.navigate['/']
      return false
    }

  }

}