import {Component, OnInit} from '@angular/core';
import {ScrumService} from '../../service/scrum.service';
import {TaskModel} from '../../models/task.model';
import {UserModel} from '../../models/user.model';
import {TaskService} from '../../service/task.service';
import {Router} from '@angular/router';
import {MainService} from '../../service/main.service';
import {BacklogService} from "../../service/backlog.service";

@Component({
  selector: 'app-backlog-task',
  templateUrl: './backlog-task.component.html',
  styleUrls: ['./backlog-task.component.css']
})
export class BacklogTaskComponent implements OnInit {

  taskeditor: boolean = false;
  editTaskID: number;
  emptynumber: number;

  taskitem: TaskModel[] = [] as TaskModel[];

  constructor(private taskService: TaskService,private backlogService:BacklogService, private router: Router, private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.authCheck();
    this.loadAllTasksByBliid();
    this.taskeditor = false;
  }

  loadAllTasksByBliid() {
    this.taskService.getTasksBliP(this.taskService.selectedBli).subscribe(
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
