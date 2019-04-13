import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {path:'',component : HomeComponent}, 
  {path : 'instruction' ,component : InstructionPageComponent},
  {path : 'studentdips', component : StudentQuestionsComponent},
  {path:'teacherdash',component:TeacherDashComponent},
  {path :'teacherfull', component:TeacherFullComponent},
  {path:'testform',component : TestFormComponent},
  {path:'qinput',component:QInputComponent},
  {path:'testdash',component:TestDashComponent},
  {path:'question',component:QuestionComponent},
  {path:'report',component:ReportComponent},
  {path:'studentTest',component:StudentQuestionsComponent }

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
StudentQuestionsComponent]

