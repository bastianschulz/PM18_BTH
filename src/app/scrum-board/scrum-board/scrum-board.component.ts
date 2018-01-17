import {Component, OnInit} from '@angular/core';
import {ScrumService} from '../../service/scrum.service';
import {TaskModel} from '../../models/task.model';
import {UserModel} from '../../models/user.model';
import {TaskService} from '../../service/task.service';
import {Router} from '@angular/router';
import {MainService} from '../../service/main.service';
import {DragulaService} from "ng2-dragula";


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

  msg = '';

  constructor(private dragula: DragulaService, private scrumService: ScrumService, private taskService: TaskService, private router: Router, private mainService: MainService) {


  }


  ngOnInit() {
    this.mainService.authCheck();
    this.loadScrumboardUsers();
    this.loadScrumboardTasks();
    this.taskeditor = false;

    this.dragula
      .drag
      .subscribe(value => {
        this.msg = `Dragging the ${ value[1].innerText }!`;
      });

    this.dragula
      .drop
      .subscribe(value => {
        this.msg = `Dropped the ${ value[1].innerText }!`;

        // Erneuern des Status des Tasks!!!

        setTimeout(() => {
          this.msg = '';
        }, 1000);
      });


  }





  loadScrumboardUsers() {
    this.scrumService.getAllUsersForSB(this.mainService.selectedProject).subscribe(
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
    this.scrumService.getAllTasksForSB(this.mainService.selectedProject).subscribe(
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
    var gelflag = 0;
    if (this.taskitem[this.editTaskID].geloescht == true) {
      gelflag = 1
    }

    this.taskService.updTask(this.taskitem[this.editTaskID].task_ID, this.taskitem[this.editTaskID].titel, this.taskitem[this.editTaskID].info, this.taskitem[this.editTaskID].user, this.taskitem[this.editTaskID].estHoMP, this.taskitem[this.editTaskID].sprint_ID, this.taskitem[this.editTaskID].backlog_ID, gelflag, this.taskitem[this.editTaskID].status, this.taskitem[this.editTaskID].erstelldatum);
    this.taskeditor = false;
  }

  noEdit() {
    this.taskeditor = false;
  }






}
