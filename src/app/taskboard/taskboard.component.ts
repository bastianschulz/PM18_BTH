import {Component, OnInit} from '@angular/core';
import {TaskModel} from '../models/task.model';
import {UserModel} from '../models/user.model';
import {TaskService} from '../service/task.service';
import {Router} from '@angular/router';
import {MainService} from '../service/main.service'

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {

  timeentry: boolean = false;
  editTaskID: number;
  emptynumber: number;
  work: number = 0;

  date: Date;

  taskitem: TaskModel[] = [] as TaskModel[];

  constructor(private taskService: TaskService, private router: Router, private mainService: MainService) {

  }

  ngOnInit() {
    this.mainService.authCheck();
    this.loadTasksTB();
    this.timeentry = false;
    this.work= 0;
  }

  loadTasksTB() {
    this.taskService.getTasksTB(this.mainService.UserID, this.mainService.selectedProject).subscribe(
      data => {
        // befüllen des Arrays
        this.taskitem = [] as TaskModel[];
        data.forEach(ergebnis => {
          this.taskitem.push(ergebnis);
        });
      }
    );
  }

  clickedOnEdit(tid: number) {
    this.editTaskID = this.emptynumber;

    var i: number = this.taskitem.length - 1;

    for (i; i >= 0; i--) {
      if (this.taskitem[i].task_ID === tid) {
        this.editTaskID = i;
      }
    }
    this.timeentry = true;
  }

  addTE(tid){
    this.taskService.postTE(tid,this.date,this.work);
    this.router.navigateByUrl('/');
  }

  setGo(tid: number){
    var stat = 3;
    this.taskService.updTaskStatus(tid,stat);
    this.router.navigateByUrl('/');
  }

  setDone(tid: number){
    var stat = 4;
    this.taskService.updTaskStatus(tid,stat);
    this.router.navigateByUrl('/');
  }

  noEdit() {
    this.timeentry = false;
  }

}
