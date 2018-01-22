import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../service/project.service';
import {ProjectModel} from '../../models/projekt.model';
import {MainService} from '../../service/main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminredo',
  templateUrl: './adminredo.component.html',
  styleUrls: ['./adminredo.component.css']
})
export class AdminredoComponent implements OnInit {

  projecteditor: boolean = false;
  editProjectID: number;
  emptynumber: number;

  projectitem: ProjectModel[] = [] as ProjectModel[];

  constructor(private projectService: ProjectService, private router: Router, private mainService: MainService) {

  }

  ngOnInit() {
    this.mainService.authCheck();
    this.loadProject();
  }

  loadProject() {
    this.projectService.getAllProjects().subscribe(
      data => {
        // befüllen des Arrays
        this.projectitem = [] as ProjectModel[];
        data.forEach(ergebnis => {
          this.projectitem.push(ergebnis);
        });
      }
    );
  }

  clickedOnEdit(project_ID: number) {
    this.editProjectID = this.emptynumber;
    var i: number = this.projectitem.length - 1;
    for (i; i >= 0; i--) {
      if (this.projectitem[i].project_ID === project_ID) {
        this.editProjectID = i;
      }
    }
    this.projecteditor = true;
  }

  redoBli(){
    this.projectService.updRedoBli(this.projectitem[this.editProjectID].project_ID);
  }

  redoTasks(){
    this.projectService.updRedoTasks(this.projectitem[this.editProjectID].project_ID);
  }

  noEdit() {
    this.projecteditor = false;
  }
}
