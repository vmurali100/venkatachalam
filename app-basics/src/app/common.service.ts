import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  sendInfo = new Subject();
  constructor() { }
  communicate(user){
    this.sendInfo.next(user)
  }
}
