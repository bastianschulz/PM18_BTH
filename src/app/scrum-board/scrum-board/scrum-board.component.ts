import {Component, OnInit} from '@angular/core';
import {ScrumModel} from '../../models/scrum.model';
import {ScrumService} from '../../service/scrum.service';
import {TaskModel} from '../../models/task.model';
import {TaskService} from '../../service/task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent implements OnInit {

  taskeditor: boolean = false;
  editTaskID: number;
  emptynumber: number;

  scrumitem: ScrumModel[] = [] as ScrumModel[];

  constructor(private scrumService: ScrumService, private taskService: TaskService, private router: Router) {
    scrumService.newScrumArray$.subscribe(
      newScrumArray => {
        this.scrumitem = newScrumArray;
      });
  }

  ngOnInit() {
    this.loadScrumboard();
    this.taskeditor = false;
  }

  loadScrumboard() {
    this.scrumService.getAllTasksForSB().subscribe(
      data => {
        // befüllen des Arrays
        this.scrumitem = [] as ScrumModel[];
        data.forEach(ergebnis => {
          this.scrumitem.push(ergebnis);
        });
      }
    );
  }

  clickedOnEdit(task_ID: number) {
    this.editTaskID = this.emptynumber;

    var i: number = this.scrumitem.length - 1;

    for (i; i >= 0; i--) {
      if (this.scrumitem[i].task_ID === task_ID) {
        this.editTaskID = i;
      }
    }
    this.taskeditor = true;
  }

  updTask() {
    this.taskService.updTask(this.scrumitem[this.editTaskID].task_ID, this.scrumitem[this.editTaskID].titel, this.scrumitem[this.editTaskID].info, this.scrumitem[this.editTaskID].estHoMP, this.scrumitem[this.editTaskID].sprint_ID, this.scrumitem[this.editTaskID].backlog_ID, this.scrumitem[this.editTaskID].geloescht, this.scrumitem[this.editTaskID].status, this.scrumitem[this.editTaskID].erstelldatum);
    this.taskeditor = false;
  }

  noEdit() {
    this.taskeditor = false;
  }

}
