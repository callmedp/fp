import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendanswersService {

  constructor(private http : HttpClient) { }
public urll = 'http://localhost:3000/api/Answers'
  saveAns(answ)
  {
    console.log(answ)
   return  this.http.post(this.urll,answ,{responseType :'text'});
  }
   infoholder = new BehaviorSubject<any>('')
  sendstudentdata(data)
  {
    this.infoholder.next(data)
  }
}
