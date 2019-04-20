import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TempdataService {

  constructor() { }

  infoholder = new BehaviorSubject<any>('')
  sendreport(data)
  {
    this.infoholder.next(data)
  }
}
