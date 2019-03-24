import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.css']
})
export class EmployelistComponent implements OnInit {
  allUsers: { "fname": string; "lname": string; "tel": string; "address": string; "city": string; "state": string; "zip": number; }[];
  @Output() sendInfo = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.allUsers = users;
    
  }

  selectUser(user){
    this.sendInfo.emit(user)
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