import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { SigninComponent } from '../signin/signin.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

   loggedin = true;

  constructor(private dialog :MatDialog) { }

  ngOnInit() {
  }

  opendialoglogin()
  {
    const dialogConfig =new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
    dialogConfig.height="75%";
    this.dialog.open(LoginComponent,dialogConfig);

  }
  opendialogsignin()
  {
    const dialogConfig =new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
    dialogConfig.height="75%";
    this.dialog.open(SigninComponent,dialogConfig);
  }
  clicklogout()
  {
    this.loggedin=!this.loggedin;

  }

}
