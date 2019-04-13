import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SendanswersService {

  constructor(private http : HttpClient) { }
 url = "http://localhost:3000/api/saveAnswers";
  saveAns(data)
  {
    this.http.post<any>(this.url,data)
  }
}
