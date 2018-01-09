import { Component, OnInit } from '@angular/core';
import {MainService} from '../service/main.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  projectF = true;
  userF = false;
  redoF = false;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.authCheck();
  }

  project(){
    this.projectF = true;
    this.userF = false;
    this.redoF = false;
  }

  user(){
    this.projectF = false;
    this.userF = true;
    this.redoF = false;
  }

  redo(){
    this.projectF = false;
    this.userF = false;
    this.redoF = true;
  }
}
