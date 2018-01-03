import { Component, OnInit } from '@angular/core';
import { SprintModel } from '../../models/sprint.model';
import { SprintService } from '../../service/sprint.service';


@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent implements OnInit {

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
        /*for (let i = 0; i < data.length; i++) {
          this.sprintService.sprintItems.set(data[i].sprint_ID, data[i]);
        }*/
      }
    );
  }

  onAddSprint(){

  }
}
