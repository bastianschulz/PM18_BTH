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

  sm=0;
  us=0;
  sh=0;

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
    if (this.asuseritem[this.editUriID].scrum===true){this.sm=1}
    if (this.asuseritem[this.editUriID].user===true){this.us=1}
    if (this.asuseritem[this.editUriID].stake===true){this.sh=1}
  }

  rollSet(){
    this.makeupdURI(this.sm, this.us, this.sh);

    this.setroll = false;
  }

  makeupdURI(sm: number, us: number, sh: number){
    this.projectService.updURI(this.asuseritem[this.editUriID].uri_ID, sm, us, sh);
    this.rolleditor = false;
    this.setroll = false;
    this.main = true;
    this.refresh();
    this.router.navigateByUrl('/Projekt/Conf');
  }

  noEdit() {
    this.rolleditor = false;
    this.setroll = false;
    this.main = true;
  }
}
