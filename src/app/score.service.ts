import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(
    private http : HttpClient) { }


  url = "http://localhost:3000/checkans/calculateans"
  
  getscore(data)
  {
    return this.http.post(this.url,data);
    

  }
}
