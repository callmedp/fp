import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from './material/material.module';
import { StudentQuesDispComponent } from './student-ques-disp/student-ques-disp.component';
import { TimerComponent } from './timer/timer.component';
import { QuestionSetComponent } from './question-set/question-set.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { LoginComponent } from './login/login.component'
import { SigninComponent } from './signin/signin.component';
import {  HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TestformService } from './testform.service';
import { FetchqService } from './fetchq.service';
import { HomeComponent } from './home/home.component';
import { QinputdashService } from './qinputdash.service';
import { DeliverQuesService } from './deliver-ques.service';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    
    StudentQuesDispComponent,
    TimerComponent,
    QuestionSetComponent,
    DialogboxComponent,
    LoginComponent,
    SigninComponent,
    RoutingComponent,
    HomeComponent,
    InstructionPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
    
  ],
  providers: [AuthService,TestformService
  ,FetchqService,QinputdashService,DeliverQuesService],
  bootstrap: [AppComponent],
  entryComponents : [DialogboxComponent,
  LoginComponent,
SigninComponent]
})
export class AppModule { }
