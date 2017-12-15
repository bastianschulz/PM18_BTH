import { Component, OnInit } from '@angular/core';

import {BackLogModel} from "./back-log.model";

@Component({
  selector: 'app-back-log',
  templateUrl: './back-log.component.html',
  styleUrls: ['./back-log.component.css']
})
export class BackLogComponent implements OnInit {

  backlogs:BackLogModel[]= [];


  constructor() { }

  ngOnInit() {
  }

}
