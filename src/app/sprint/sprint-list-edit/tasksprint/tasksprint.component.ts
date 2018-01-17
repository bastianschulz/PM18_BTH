import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../service/task.service';
import {TaskModel} from '../../../models/task.model';
import {MainService} from '../../../service/main.service';
import {SprintService} from '../../../service/sprint.service';
import {UserModel} from '../../../models/user.model';
import {Router} from '@angular/router';
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-tasksprint',
  templateUrl: './tasksprint.component.html',
  styleUrls: ['./tasksprint.component.css']
})
export class TasksprintComponent implements OnInit {

  empty: number;

  constructor(private userService:UserService, private taskService: TaskService, private sprintService: SprintService, private router: Router, private mainService: MainService) {

  }

  ngOnInit() {
    this.mainService.authCheck();
  }

  noEdit(){
    this.sprintService.selectedTask = this.empty;
    this.sprintService.selectedSprint = this.empty;
    this.sprintService.selectedUser = this.empty;
    this.router.navigateByUrl("/SprintPlanning");
  }

}
