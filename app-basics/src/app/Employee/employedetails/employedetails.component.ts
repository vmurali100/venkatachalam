import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employedetails',
  templateUrl: './employedetails.component.html',
  styleUrls: ['./employedetails.component.css']
})
export class EmployedetailsComponent implements OnInit {
  sUser;
  constructor() { }

  ngOnInit() {
  }
  receiveInfo(info){
    this.sUser = info;
  }
}
