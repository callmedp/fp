import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliverQuesService {

  public infoholder=new Subject<any>();
  public holder$=this.infoholder.asObservable();
  constructor(private http : HttpClient) { }
  url = "http://localhost:3000/api/retrieveQuestions";
  getQuestions(key){
    return this.http.post(this.url,key);
  }

  passQuestions(data){
       this.infoholder.next(data)
  }

}
