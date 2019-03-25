import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-httpserv',
  templateUrl: './httpserv.component.html',
  styleUrls: ['./httpserv.component.css']
})
export class HttpservComponent implements OnInit {
  users: any;
  userToEdit;
  isEdit: boolean;
  isCreate: boolean;
  constructor(private CommonService:CommonService) { }

  ngOnInit() {
    this.getusers()   
  }

  getusers(){
    this.CommonService.getUsers().subscribe((res)=>{
      this.users = res;
    })
  }
  deleteUser(obj){
    this.CommonService.deleteUser(obj).subscribe(re=>{
      console.log("Usr Deleted")
      this.getusers()
    })
  }
  editUser(user){
    this.isEdit = true;
    console.log(user)
    this.userToEdit = user;
  }

  onSubmitForm(event,form){
    event.preventDefault()
    console.log(this.userToEdit)
    this.CommonService.updateUser(this.userToEdit).subscribe(()=>{
      console.log("user Updted")
    })
  }
  showCreate(){
    this.isEdit=false;
    this.userToEdit={
      "fname": "",
        "lname": "",
        "tel": "",
        "address": "",
        "city": "",
        "state": "",
        "zip": null
    }
  }

}
