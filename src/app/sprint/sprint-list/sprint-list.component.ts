import {Component, OnInit} from '@angular/core';
import {SprintModel} from '../../models/sprint.model';
import {SprintService} from '../../service/sprint.service';
import {MainService} from "../../service/main.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent implements OnInit {

  sprinteditor: boolean = false;
  editSprintID: number;
  emptynumber: number;

  sprintitem: SprintModel[] = [] as SprintModel[];

  constructor(private sprintService: SprintService, private mainService: MainService, private router: Router) {
  }


  /*
  * getAllTasksByTaskStatus(){
  * Status muss immer Entwurf sein.
  *
  *
  * */

  ngOnInit() {
    this.loadSprint();
  }

  loadSprint() {
    this.sprintService.getAllSprintsByPid(this.mainService.selectedProject).subscribe(
      data => {
        // befüllen des Arrays
        this.sprintitem = [] as SprintModel[];
        data.forEach(ergebnis => {
          this.sprintitem.push(ergebnis);
        });
      }
    );
  }

  clickedOnEdit(sprint_ID: number) {
    this.editSprintID = this.emptynumber;

    var i: number = this.sprintitem.length - 1;

    for (i; i >= 0; i--) {
      if (this.sprintitem[i].sprint_ID === sprint_ID) {
        this.editSprintID = i;
      }
    }

    this.sprinteditor = true;
  }

  updSprint() {
    this.sprintService.updSprint(this.sprintitem[this.editSprintID].sprint_ID, this.sprintitem[this.editSprintID].titel, this.sprintitem[this.editSprintID].start, this.sprintitem[this.editSprintID].end, this.sprintitem[this.editSprintID].status);
    this.sprinteditor = false;
  }

  noEdit() {
    this.sprinteditor = false;
  }

  sprintTask(sprint_ID: number) {
    this.sprintService.selectedSprint = sprint_ID;
    this.router.navigateByUrl('/Sprint/Task');
  }
}
