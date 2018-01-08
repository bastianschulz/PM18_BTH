import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  projectF = false;
  userF = false;
  redoF = false;

  constructor() { }

  ngOnInit() {
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
