import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendanswersService {

  constructor(private http : HttpClient) { }
public urll = 'http://localhost:3000/api/Answers'
public url2="http://localhost:3000/checkans/reportdata"
public umrl='http://localhost:3000/checkans/getMetaData';
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
  getScores(data)
  {
   return  this.http.post(this.url2,data); 
   }

getMetaData(passkey){
  console.log("meta passkey"+passkey)
  return this.http.post(this.umrl,{passkey :passkey})
}
}
