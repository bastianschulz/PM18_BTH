import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../service/task.service';
import {TaskModel} from '../../../../models/task.model';
import {MainService} from '../../../../service/main.service';
import {SprintService} from '../../../../service/sprint.service';

@Component({
  selector: 'app-seltask',
  templateUrl: './seltask.component.html',
  styleUrls: ['./seltask.component.css']
})
export class SeltaskComponent implements OnInit {

  unastask: TaskModel[] = [] as TaskModel[];
  selectedTask_ID: number;
  empty: number;

  constructor(private taskService: TaskService, private sprintService: SprintService, private mainService: MainService) {

  }

  ngOnInit() {
    this.mainService.authCheck();
    this.selectedTask_ID = this.empty;
    this.loadUnAsTasks();
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

  selectTask(task_ID: number){
    this.sprintService.setSelectedTask(task_ID);
  }
}
