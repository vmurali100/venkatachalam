import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  sendInfo = new Subject();
  constructor(private _http:HttpClient) { }
  communicate(user){
    this.sendInfo.next(user)
  }

  communicate1(product){
    this.sendInfo.next(product)
  }

  getUsers(){
    return this._http.get('http://localhost:3000/users')   
  }
  deleteUser(obj){
    return this._http.delete('http://localhost:3000/users/'+obj.id)
  }
  updateUser(obj){
    return this._http.put('http://localhost:3000/users/'+obj.id,obj)
  }
}
