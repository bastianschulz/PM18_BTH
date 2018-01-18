import { Component, OnInit } from '@angular/core';
import {MainService} from '../service/main.service';
import {Router} from '@angular/router';
import {TaskService} from "../service/task.service";
import {PlaningPokerModel} from "../models/planingPoker.model";
import {PlanpoService} from "../service/planpo.service";

@Component({
  selector: 'app-planningpoker',
  templateUrl: './planningpoker.component.html',
  styleUrls: ['./planningpoker.component.css']
})
export class PlanningpokerComponent implements OnInit {

  planpoitem: PlaningPokerModel[] = [] as PlaningPokerModel[];

  constructor(private taskService: TaskService, private planpoService: PlanpoService, private router: Router, private mainService: MainService) {
  }
  //TODO darstellung fehlerhaft teiln und summe felder fehlen im browser

  ngOnInit() {
    this.mainService.authCheck();
    this.loadPlanPoItems();
  }

  loadPlanPoItems() {
    this.planpoService.getPPByPid(this.mainService.selectedProject).subscribe(
      data => {
        // befüllen des Arrays
        this.planpoitem = [] as PlaningPokerModel[];
        data.forEach(ergebnis => {
          this.planpoitem.push(ergebnis);
        });
      }
    );
  }
}
