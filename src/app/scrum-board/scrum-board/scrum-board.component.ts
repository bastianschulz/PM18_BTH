import {Component, OnInit} from '@angular/core';
import {ScrumService} from '../../service/scrum.service';
import {TaskModel} from '../../models/task.model';
import {UserModel} from '../../models/user.model';
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

  taskitem: TaskModel[] = [] as TaskModel[];
  users: UserModel[] = [] as UserModel[];

  constructor(private scrumService: ScrumService, private taskService: TaskService, private router: Router) {
    scrumService.newScrumArray$.subscribe(
      newScrumArray => {
        this.taskitem = newScrumArray;
      });
  }

  ngOnInit() {
    this.loadScrumboardUsers();
    this.loadScrumboardTasks();
    this.taskeditor = false;
  }

  loadScrumboardUsers() {
    this.scrumService.getAllUsersForSB().subscribe(
      data => {
        // befüllen des Arrays
        this.users = [] as UserModel[];
        data.forEach(ergebnis => {
          this.users.push(ergebnis);
        });
      }
    );
  }

  loadScrumboardTasks() {
    this.scrumService.getAllTasksForSB().subscribe(
      data => {
        // befüllen des Arrays
        this.taskitem = [] as TaskModel[];
        data.forEach(ergebnis => {
          this.taskitem.push(ergebnis);
        });
      }
    );
  }

  clickedOnEdit(task_ID: number) {
    this.editTaskID = this.emptynumber;

    var i: number = this.taskitem.length - 1;

    for (i; i >= 0; i--) {
      if (this.taskitem[i].task_ID === task_ID) {
        this.editTaskID = i;
      }
    }
    this.taskeditor = true;
  }

  updTask() {
    this.taskService.updTask(this.taskitem[this.editTaskID].task_ID, this.taskitem[this.editTaskID].titel, this.taskitem[this.editTaskID].info, this.taskitem[this.editTaskID].user, this.taskitem[this.editTaskID].estHoMP, this.taskitem[this.editTaskID].sprint_ID, this.taskitem[this.editTaskID].backlog_ID, this.taskitem[this.editTaskID].geloescht, this.taskitem[this.editTaskID].status, this.taskitem[this.editTaskID].erstelldatum);
    this.taskeditor = false;
  }

  noEdit() {
    this.taskeditor = false;
  }

}
