import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 urls = "http://localhost:3000/api/studentsignup";
 urlt = "http://localhost:3000/api/teachersignup";

 loginSturl="http://localhost:3000/api/loginStudent";
 loginteacherurl="http://localhost:3000/api/loginTeacher";
  constructor(private http : HttpClient) { }
  checkStudent(login)
  {
    return this.http.post<any>(this.loginSturl,login);

  }
  checkTeacher(login)
  {
    return this.http.post<any>(this.loginteacherurl,login);
  }
  storeStudent(data)
  {
    return this.http.post<any>(this.urls,data);
  }
  storeTeacher(data)
  {
    return this.http.post<any>(this.urlt,data);

  }



}
