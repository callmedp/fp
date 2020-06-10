import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class TestformService {
  private datatransfersource = new Subject<string>();
  datatransfer$ = this.datatransfersource.asObservable();
  constructor(private http : HttpClient) { }

  sendmessage(passkey : string)
  {
    this.datatransfersource.next(passkey);
  }

  urls = "http://localhost:3000/api/testdata";
  urlt = "http://localhost:3000/api/loadquestion";
   
   storetestfrom(data)
   {
     return this.http.post<any>(this.urls,data);
   }
   storequestion(data)
   {
     return this.http.post<any>(this.urlt,data);
   }





 
}
