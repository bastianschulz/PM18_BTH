import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {UserModel} from '../../models/user.model';
import {AsUserModel} from '../../models/asuser.model';
import {URLModel} from '../../models/url.model';
import {MainService} from '../../service/main.service';
import {ProjectService} from '../../service/project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  main: boolean = true;
  rolleditor: boolean = false;
  setroll: boolean = false;

  asuseritem: AsUserModel[] = [] as AsUserModel[];
  urlitem: URLModel[] = [] as URLModel[];

  editUriID: number;
  emptynumber: number;

  selRoll: number = 0;
  selRollset: boolean =false;
  sm: number = 0;
  us: number = 0;
  sh: number = 0;

  constructor(private projectService: ProjectService, private userService: UserService, private router: Router, private mainService: MainService) {

  }

  //TODO. fehlerhafte logik setzt die flags bei der rechte vergabe manchmal falsch

  ngOnInit() {
    this.mainService.authCheck();
    this.refresh();
  }

  refresh(){
    this.loadAsUsers(this.projectService.selctedProjectID);
    this.loadURI(this.projectService.selctedProjectID);
  }

  loadAsUsers(project_ID: number) {
    this.userService.getAllAsUsers(project_ID).subscribe(
      data => {
        // befüllen des Arrays
        this.asuseritem = [] as AsUserModel[];
        data.forEach(ergebnis => {
          this.asuseritem.push(ergebnis);
        });
      }
    );
  }

  deleteuserfromProject(uri_ID: number) {
    this.projectService.delURI(uri_ID);
    this.router.navigateByUrl('/Admin');
  }

  loadURI(project_ID: number) {
    this.projectService.getURLByPid(project_ID).subscribe(
      data => {
        // befüllen des Arrays
        this.urlitem = [] as URLModel[];
        data.forEach(ergebnis => {
          this.urlitem.push(ergebnis);
        });
      }
    );
  }

  rechte(uri_ID: number) {
    this.editUriID = this.emptynumber;
    var i: number = this.asuseritem.length - 1;
    for (i; i >= 0; i--) {
      if (this.asuseritem[i].uri_ID === uri_ID) {
        this.editUriID = i;
      }
    }
    this.main = false;
    this.rolleditor = true;
  }

  updURI() {
    this.rolleditor = false;
    this.setroll = true;
  }

  selectRoll(){
    if (this.selRoll==0){
    } else {
      this.flippnumbers();
    }
  }

  flippnumbers(){
    if (this.selRoll==1){
      this.sm = 1;
      this.us = 0;
      this.sh = 0;
      this.selRollset = true;
      return;
    }
    if (this.selRoll==2){
      this.sm = 1;
      this.us = 1;
      this.sh = 0;
      this.selRollset = true;
      return;
    }
    if (this.selRoll==3){
      this.sm = 0;
      this.us = 1;
      this.sh = 0;
      this.selRollset = true;
      return;
    }
    if (this.selRoll==4){
      this.sm = 0;
      this.us = 0;
      this.sh = 1;
      this.selRollset = true;
      return;
    }
  }

  rollSet(){
    this.projectService.updURI(this.asuseritem[this.editUriID].uri_ID, this.sm, this.us, this.sh);
    this.refresh();
    this.noEdit();
    this.router.navigateByUrl('/Projekt/Conf');
  }

  noEdit() {
    this.rolleditor = false;
    this.setroll = false;
    this.main = true;
    this.selRoll = 0;
    this.selRollset = false;
    this.sm = 0;
    this.us = 0;
    this.sh = 0;
  }
}
