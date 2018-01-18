import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MainService} from '../../service/main.service';
import {PlanpoService} from "../../service/planpo.service";
import {TaskModel} from "../../models/task.model";
import {TaskService} from "../../service/task.service";

@Component({
  selector: 'app-addplanningpoker',
  templateUrl: './addplanningpoker.component.html',
  styleUrls: ['./addplanningpoker.component.css']
})
export class AddplanningpokerComponent implements OnInit {

  taskitem: TaskModel[] = [] as TaskModel[];

  pptask: number;
  emptynumber: number;

  constructor(private planpoService: PlanpoService, private router: Router, private mainService: MainService, private taskService: TaskService) { }

  ngOnInit() {
    this.mainService.authCheck();
    this.getTasksForPP();
  }

  getTasksForPP(){
    this.taskService.getTasksForPP(this.mainService.selectedProject).subscribe(
      data => {
        // befüllen des Arrays
        this.taskitem = [] as TaskModel[];
        data.forEach(ergebnis => {
          this.taskitem.push(ergebnis);
        });
      }
    );
  }

  clickedTask(tid: number) {
    this.pptask=tid;
    this.planpoService.pptask = tid;
  }

  exitPP() {
    this.planpoService.reset();
    this.pptask=this.emptynumber;
    this.router.navigateByUrl('/PlanningPoker');
  }

}
