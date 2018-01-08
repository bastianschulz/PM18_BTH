import {Component, OnInit} from '@angular/core';
import {SprintModel} from '../../models/sprint.model';
import {SprintService} from '../../service/sprint.service';


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

  constructor(private sprintService: SprintService) {
    sprintService.newSprintArray$.subscribe(
      newSprintArray => {
        this.sprintitem = newSprintArray;
      });
  }

  ngOnInit() {
    this.loadSprint();
  }

  loadSprint() {
    this.sprintService.getAllSprints().subscribe(
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
    this.editSprintID = sprint_ID-1;

    console.log('editSprintID: ' + this.editSprintID);

    this.sprinteditor = true;
  }

  updSprint() {

    this.sprintService.updSprint(this.sprintitem[this.editSprintID].sprint_ID, this.sprintitem[this.editSprintID].titel, this.sprintitem[this.editSprintID].start, this.sprintitem[this.editSprintID].end, this.sprintitem[this.editSprintID].status);
    console.log('update editSprint_ID: ' + this.editSprintID);
    console.log('update Sprint_ID: ' + this.sprintitem[this.editSprintID].sprint_ID);
    console.log('update titel: ' + this.sprintitem[this.editSprintID].titel);
    console.log('update start: ' + this.sprintitem[this.editSprintID].start);
    console.log('update end: ' + this.sprintitem[this.editSprintID].end);
    console.log('update status: ' + this.sprintitem[this.editSprintID].status);
    this.sprinteditor = false;
  }

  noEdit() {
    this.sprinteditor = false;
  }
}
