import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { TeacherFullComponent } from './teacher-full/teacher-full.component';
import { TeacherDashComponent } from './teacher-dash/teacher-dash.component';
import { TestFormComponent } from './test-form/test-form.component';
import { QInputComponent } from './q-input/q-input.component';
import { TestDashComponent } from './test-dash/test-dash.component';
import { QuestionComponent } from './question/question.component';
import { ReportComponent } from './report/report.component';
import { StudentQuestionsComponent } from './student-questions/student-questions.component';
import { HomeComponent } from './home/home.component';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';
import { ScoreComponent } from './score/score.component';
import { AuthgaurdGuard } from './authgaurd.guard';


const routes: Routes = [
  {path:'',component : HomeComponent}, 
  {path : 'score/:username/:passkey',component:ScoreComponent, canActivate : [AuthgaurdGuard]},
  {path : 'instruction' ,component : InstructionPageComponent , canActivate : [AuthgaurdGuard]},
  {path : 'studentdips', component : StudentQuestionsComponent, canActivate : [AuthgaurdGuard]},
  {path:'teacherdash',component:TeacherDashComponent, canActivate : [AuthgaurdGuard]},
  {path :'teacherfull', component:TeacherFullComponent, canActivate : [AuthgaurdGuard]},
  {path:'testform',component : TestFormComponent, canActivate : [AuthgaurdGuard]},
  {path:'qinput',component:QInputComponent, canActivate : [AuthgaurdGuard]},
  {path:'testdash',component:TestDashComponent, canActivate : [AuthgaurdGuard]},
  {path:'question',component:QuestionComponent, canActivate : [AuthgaurdGuard]},
  {path:'report',component:ReportComponent, canActivate : [AuthgaurdGuard]},
  {path:'studentTest',component:StudentQuestionsComponent, canActivate : [AuthgaurdGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent=[HomeComponent,
TeacherDashComponent,
TeacherFullComponent,
TestFormComponent,
InstructionPageComponent,
QInputComponent,
TestDashComponent,
QuestionComponent,ReportComponent,
StudentQuestionsComponent,
ScoreComponent]

