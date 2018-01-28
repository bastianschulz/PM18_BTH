import { Component, OnInit } from '@angular/core';
import {MainService} from "../../service/main.service";




@Component({
  selector: 'app-time-slot-item',
  templateUrl: './time-slot-item.component.html',
  styleUrls: ['./time-slot-item.component.css']
})
export class TimeSlotItemComponent implements OnInit {

  constructor(private mainservice: MainService) { }

  ngOnInit() {
    this.mainservice.authCheck()
  }




}
