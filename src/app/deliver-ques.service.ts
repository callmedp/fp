import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliverQuesService {

  public infoholder=new BehaviorSubject<any>('');
  public infoholder1=new BehaviorSubject<any>('');
  public infoholder2=new BehaviorSubject<any>('');
  constructor(private http : HttpClient) { }
  url = "http://localhost:3000/api/retrieveQuestions";
  getQuestions(passkey){
    return this.http.post(this.url,passkey);
  }

  passQuestions(data){
       this.infoholder.next(data)
  }
  passMeta(meta){
    this.infoholder2.next(meta)
  }

  passthekey(passkey)
  {
    this.infoholder1.next(passkey);
  }

}
