import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QinputdashService {

  constructor() { }
  private datatransfersource = new Subject<any>();
  datatransfer$ = this.datatransfersource.asObservable();

  sendmessage(questiondata)
  {
    this.datatransfersource.next(questiondata);
    console.log("this is service");
  }
}
