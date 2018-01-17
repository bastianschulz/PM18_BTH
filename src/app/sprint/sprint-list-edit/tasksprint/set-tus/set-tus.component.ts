import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../service/user.service";
import {TaskService} from "../../../../service/task.service";
import {MainService} from "../../../../service/main.service";
import {Router} from "@angular/router";
import {SprintService} from "../../../../service/sprint.service";
import {TaskModel} from "../../../../models/task.model";
import {UserModel} from "../../../../models/user.model";

@Component({
  selector: 'app-set-tus',
  templateUrl: './set-tus.component.html',
  styleUrls: ['./set-tus.component.css']
})
export class SetTusComponent implements OnInit {

  empty:number;

  unastask: TaskModel[] = [] as TaskModel[];
  seltask: number;
  users: UserModel[] = [] as UserModel[];
  seluser: number;
  emptynumber:number;

  constructor(private userService: UserService, private taskService: TaskService, private sprintService: SprintService, private router: Router, private mainService: MainService) { }

  ngOnInit() {
    this.mainService.authCheck();
    this.loadProjectUsers();
    this.loadUnAsTasks();
    this.setSel();
  }

  loadUnAsTasks() {
    this.taskService.getProjektTasks(this.mainService.selectedProject).subscribe(
      data => {
        // befüllen des Arrays
        this.unastask = [] as TaskModel[];
        data.forEach(ergebnis => {
          this.unastask.push(ergebnis);
        });
      }
    );
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

  setSel(){

    var i: number = this.unastask.length - 1;
    for (i; i >= 0; i--) {
      if (this.unastask[i].task_ID === this.sprintService.selectedTask) {
        this.seltask = i;
      }
    }

    var i: number = this.users.length - 1;
    for (i; i >= 0; i--) {
      if (this.users[i].user_ID === this.sprintService.selectedUser) {
        this.seluser = i;
      }
    }
    console.log('user / task -->> '+this.seluser+' / '+this.seltask);
  }

  taskToSprint() {
    this.taskService.asTask(this.sprintService.selectedTask, this.sprintService.selectedSprint, this.sprintService.selectedUser);
    this.sprintService.selectedTask = this.empty;
    this.sprintService.selectedSprint = this.empty;
    this.sprintService.selectedUser = this.empty;
    this.router.navigateByUrl('/Sprint/Task');
  }

  noEdit(){
    this.sprintService.selectedTask = this.empty;
    this.sprintService.selectedSprint = this.empty;
    this.sprintService.selectedUser = this.empty;
    this.router.navigateByUrl('/Sprint/Task');
  }
}
