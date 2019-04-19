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
import {  HttpClientModule ,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import { TestformService } from './testform.service';
import { FetchqService } from './fetchq.service';
import { HomeComponent } from './home/home.component';
import { QinputdashService } from './qinputdash.service';
import { DeliverQuesService } from './deliver-ques.service';
import { SendanswersService } from './sendanswers.service';
import { ScoreService } from './score.service';
import { AuthgaurdGuard } from './authgaurd.guard';
import { TokenIntersepterService } from './token-intersepter.service';



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
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
    
  ],
  providers: [AuthService,
    TestformService,
    FetchqService,
    QinputdashService,
    DeliverQuesService,
    SendanswersService,
    ScoreService,
    AuthgaurdGuard,
    {
      provide :HTTP_INTERCEPTORS,
      useClass : TokenIntersepterService,
      multi : true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents : [DialogboxComponent,
  LoginComponent,
SigninComponent]
})
export class AppModule { }
