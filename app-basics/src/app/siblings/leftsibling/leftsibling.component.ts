import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
@Component({
  selector: 'app-leftsibling',
  templateUrl: './leftsibling.component.html',
  styleUrls: ['./leftsibling.component.css']
})
export class LeftsiblingComponent implements OnInit {
  allUsers: { "fname": string; "lname": string; "tel": string; "address": string; "city": string; "state": string; "zip": number; }[];

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.allUsers = users;
  }
  
  selectUser(user){
    this.commonService.communicate(user)
  }
}

const users = [
  {
      "fname": "Monthro",
      "lname": "Schuplin",
      "tel": "(980)155-3113",
      "address": "4487 Consequat Ln",
      "city": "Dinwiddie",
      "state": "MD",
      "zip": 31333
  },
  {
      "fname": "Emilia",
      "lname": "Cobb",
      "tel": "(121)516-8038",
      "address": "842 Odio Dr",
      "city": "Fayetteville",
      "state": "SC",
      "zip": 64125
  },
  {
      "fname": "Nichelle",
      "lname": "Plourde",
      "tel": "(140)528-9294",
      "address": "5571 Molestie Ave",
      "city": "Bloomingdale",
      "state": "WI",
      "zip": 77922
  },
  {
      "fname": "Adrienne",
      "lname": "Crantek",
      "tel": "(730)007-1887",
      "address": "4509 Vitae St",
      "city": "Cape Coral",
      "state": "TN",
      "zip": 24834
  },
  {
      "fname": "Gladys",
      "lname": "Hiles",
      "tel": "(693)013-8380",
      "address": "3807 Eros Ct",
      "city": "Lancaster",
      "state": "MN",
      "zip": 74224
  }
]