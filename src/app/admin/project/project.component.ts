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

  rolleditor: boolean = false;

  asuseritem: AsUserModel[] = [] as AsUserModel[];
  urlitem: URLModel[] = [] as URLModel[];

  editUriID: number;
  emptynumber: number;

  constructor(private projectService: ProjectService, private userService: UserService, private router: Router, private mainService: MainService) {

  }

  ngOnInit() {
    this.mainService.authCheck();
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
    this.projectService.delURI(uri_ID)
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
    this.rolleditor = true;
  }

  updURI() {
    var sm=0;
    var us=0;
    var sh=0;

    if (this.asuseritem[this.editUriID].scrum===true){sm=1}
    if (this.asuseritem[this.editUriID].user===true){us=1}
    if (this.asuseritem[this.editUriID].stake===true){sh=1}

    this.makeupdURI(sm, us, sh);
  }

  makeupdURI(sm: number, us: number, sh: number){
    this.projectService.updURI(this.asuseritem[this.editUriID].uri_ID, sm, us, sh);
    this.rolleditor = false;
    this.router.navigateByUrl('/Admin');
  }

  noEdit() {
    this.rolleditor = false;
  }
}
