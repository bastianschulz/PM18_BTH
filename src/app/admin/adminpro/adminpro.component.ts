import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service';
import { ProjectModel } from '../../models/projekt.model';

@Component({
  selector: 'app-adminpro',
  templateUrl: './adminpro.component.html',
  styleUrls: ['./adminpro.component.css']
})
export class AdminproComponent implements OnInit {

  projecteditor: boolean = false;
  editProjectID: number;
  emptynumber: number;

  projectitem: ProjectModel[] = [] as ProjectModel[];

  constructor(private projectService: ProjectService) {
    projectService.newProjectArray$.subscribe(
      newProjectArray => {
        this.projectitem = newProjectArray;
      });
  }

  ngOnInit() {
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

  updProject() {
    this.projectService.updProject(this.projectitem[this.editProjectID].project_ID, this.projectitem[this.editProjectID].titel, this.projectitem[this.editProjectID].info);
    this.projecteditor = false;
  }

  noEdit() {
    this.projecteditor = false;
  }
}
