import { Component, OnInit } from '@angular/core';
import {PRLModel} from '../models/prl.model';

import {ProjectService} from '../service/project.service';
import {MainService} from "../service/main.service";

@Component({
  selector: 'app-header-after-log-in',
  templateUrl: './header-after-log-in.component.html',
  styleUrls: ['./header-after-log-in.component.css']
})
export class HeaderAfterLogInComponent implements OnInit {

  Username: string;
  PRL: PRLModel[] = [] as PRLModel[];
  selectP: number;

  scrum = false;
  user = false;
  stake = false;

  constructor(private projectS:ProjectService, private mainService: MainService) {

  }

  ngOnInit() {
    this.Username = this.mainService.Username;
    this.loadPRL();
  }

  loadPRL() {
    this.projectS.getPRL(this.mainService.UserID).subscribe(
      data => {
        // befüllen des Arrays
        this.PRL = [] as PRLModel[];
        data.forEach(ergebnis => {
          this.PRL.push(ergebnis);
        });
      }
    );
  }

  logout(){
    this.mainService.logout();
  }

  selectProject(proid:number){
    var i: number = this.PRL.length - 1;
    for (i; i >= 0; i--) {
      if (this.PRL[i].project_ID === proid) {
        this.scrum = this.PRL[i].scrum;
        this.user = this.PRL[i].user;
        this.stake = this.PRL[i].stake;

        this.mainService.selectedProject = this.selectP;
        this.mainService.scrum = this.PRL[i].scrum;
        this.mainService.user = this.PRL[i].user;
        this.mainService.stake = this.PRL[i].stake;
      }
    }
  }

}
