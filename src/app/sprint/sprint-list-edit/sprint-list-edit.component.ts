import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../service/task.service";
import {MainService} from "../../service/main.service";
import {Router} from "@angular/router";
import {SprintService} from "../../service/sprint.service";
import {TaskModel} from '../../models/task.model';
import {UserModel} from '../../models/user.model';
import {UserService} from "../../service/user.service";



@Component({
  selector: 'app-sprint-list-edit',
  templateUrl: './sprint-list-edit.component.html',
  styleUrls: ['./sprint-list-edit.component.css']
})
export class SprintListEditComponent implements OnInit {

  taskeditor: boolean = false;
  editTaskID: number;
  emptynumber: number;

  taskitem: TaskModel[] = [] as TaskModel[];
  users: UserModel[] = [] as UserModel[];

  constructor(private sprintService: SprintService, private mainService: MainService, private router: Router, private taskService: TaskService, private userService: UserService) { }

  ngOnInit() {
    this.mainService.authCheck();
    this.loadProjectUsers();
    this.getAllTasksBySid();
    this.taskeditor = false;
  }

  loadProjectUsers() {
    this.userService.getProjectUsers(this.mainService.selectedProject).subscribe(
      data => {
        // befüllen des Arrays
        this.users = [] as UserModel[];
        data.forEach(ergebnis => {
          this.users.push(ergebnis);
        });
      }
    );
  }

  getAllTasksBySid() {
    this.taskService.getAllTasksBySid(this.sprintService.selectedSprint).subscribe(
      data => {
        // befüllen des Arrays
        this.taskitem = [] as TaskModel[];
        data.forEach(ergebnis => {
          this.taskitem.push(ergebnis);
        });
      }
    );
  }

  deleteTaskfromSprint(task_ID: number) {
  this.taskService.freeTask(task_ID);
  this.router.navigateByUrl('/SprintPlanning');
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
    if (this.taskitem[this.editTaskID].geloescht==true){
      gelflag=1
    }

    this.taskService.updTask(this.taskitem[this.editTaskID].task_ID, this.taskitem[this.editTaskID].titel, this.taskitem[this.editTaskID].info, this.taskitem[this.editTaskID].user, this.taskitem[this.editTaskID].estHoMP, this.taskitem[this.editTaskID].sprint_ID, this.taskitem[this.editTaskID].backlog_ID, gelflag, this.taskitem[this.editTaskID].status, this.taskitem[this.editTaskID].erstelldatum);
    this.taskeditor = false;
  }

  noEdit() {
    this.taskeditor = false;
  }

}
