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

  task_ID: number;
  titel: string;
  info: string;
  estHoMP: number;
  sprint_ID: number;
  backlog_ID: number;
  geloescht: boolean;
  status: string;
  erstelldatum: Date;

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

  clickedOnEdit(task_ID: string) {


    let taskitem: TaskModel[] = [] as TaskModel[];

    this.taskService.getTaskByTaskID(task_ID).subscribe(
      data => {
        // befüllen des Arrays
        taskitem = [] as TaskModel[];
        data.forEach(ergebnis => {
          taskitem.push(ergebnis);
        });
      }
    );

    /*this.task_ID = this.taskitem[0].task_ID;
    this.titel = this.taskitem[0].titel;
    this.info = this.taskitem[0].info;
    this.estHoMP = this.taskitem[0].estHoMP;
    this.sprint_ID = this.taskitem[0].sprint_ID;
    this.backlog_ID = this.taskitem[0].backlog_ID;
    this.geloescht = this.taskitem[0].geloescht;
    this.status = this.taskitem[0].status;
    this.erstelldatum = this.taskitem[0].erstelldatum;

    this.taskitem.pop();*/

    this.taskeditor = true;
  }

  editTask() {
    //this.taskService.updTask(this.task_ID, this.titel, this.info, this.estHoMP, this.sprint_ID, this.backlog_ID, this.geloescht, this.status, this.erstelldatum);

    this.taskeditor = false;
  }

}
