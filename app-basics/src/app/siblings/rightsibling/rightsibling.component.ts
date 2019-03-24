import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-rightsibling',
  templateUrl: './rightsibling.component.html',
  styleUrls: ['./rightsibling.component.css']
})
export class RightsiblingComponent implements OnInit {
  user: {};

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.sendInfo.subscribe(res=>{
      this.user=res;
    })
  }

}
