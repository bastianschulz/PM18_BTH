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

  addeditor: boolean = false;

  asuseritem: AsUserModel[] = [] as AsUserModel[];
  urlitem: URLModel[] = [] as URLModel[];

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

  updURI(uri_ID: number) {


    this.router.navigateByUrl('/Projekt/Conf');
  }


}
