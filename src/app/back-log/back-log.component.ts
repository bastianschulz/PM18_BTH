import { Component, OnInit } from '@angular/core';
import { BacklogItemModel } from '../models/backLogItem.model';
import { BacklogService } from '../service/backlog.service';

@Component({
  selector: 'app-back-log',
  templateUrl: './back-log.component.html',
  styleUrls: ['./back-log.component.css']
})
export class BackLogComponent implements OnInit {

  blieditor: boolean = false;
  editBliID: number;
  emptynumber: number;

  backlogitem: BacklogItemModel[] = [] as BacklogItemModel[];

  constructor(private backlogService: BacklogService) {
    backlogService.newBacklogItemArray$.subscribe(
      newBacklogItemArray => {
        this.backlogitem = newBacklogItemArray;
      });
  }

  ngOnInit() {
    this.loadBacklogItems();
  }

  loadBacklogItems() {
    this.backlogService.getAllBacklogItems().subscribe(
      data => {
        // befüllen des Arrays
        this.backlogitem = [] as BacklogItemModel[];
        data.forEach(ergebnis => {
          this.backlogitem.push(ergebnis);
        });
      }
    );
  }

  clickedOnEdit(bli_ID: number) {
    this.editBliID = this.emptynumber;

    var i: number = this.backlogitem.length - 1;

    for (i; i >= 0; i--) {
      if (this.backlogitem[i].bli_ID === bli_ID) {
        this.editBliID = i;
      }
    }

    this.blieditor = true;
  }

  updBacklogItem() {
  //  this.sprintService.updSprint(this.sprintitem[this.editSprintID].sprint_ID, this.sprintitem[this.editSprintID].titel, this.sprintitem[this.editSprintID].start, this.sprintitem[this.editSprintID].end, this.sprintitem[this.editSprintID].status);
    this.blieditor = false;
  }

  noEdit() {
    this.blieditor = false;
  }
}
