import { Component, OnInit } from '@angular/core';
import { UserStoryModel } from '../models/userstory.model';
import { UserstoryService } from '../service/userstory.service';
import {MainService} from '../service/main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userstory',
  templateUrl: './userstory.component.html',
  styleUrls: ['./userstory.component.css']
})
export class UserstoryComponent implements OnInit {

  useditor: boolean = false;
  editUserStoID: number;
  emptynumber: number;


  storyitem: UserStoryModel[] = [] as UserStoryModel[];

  constructor(private userstoryService: UserstoryService, private router: Router, private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.authCheck();
    this.loadStorys();
  }

  loadStorys() {
    this.userstoryService.getAllUserstory(this.mainService.selectedProject).subscribe(
      data => {
        // befüllen des Arrays
        this.storyitem = [] as UserStoryModel[];
        data.forEach(ergebnis => {
          this.storyitem.push(ergebnis);
        });
      }
    );
  }

  clickedOnEdit(us_ID: number) {
    this.editUserStoID = this.emptynumber;

    var i: number = this.storyitem.length - 1;

    for (i; i >= 0; i--) {
      if (this.storyitem[i].us_ID === us_ID) {
        this.editUserStoID = i;
      }
    }
    this.useditor = true;
  }

  addstorybacklog(us_ID: number) {
    this.editUserStoID = this.emptynumber;

    var i: number = this.storyitem.length - 1;

    for (i; i >= 0; i--) {
      if (this.storyitem[i].us_ID === us_ID) {
        this.editUserStoID = us_ID;
      }
    }
    this.userstoryService.selectedUserStoID=this.editUserStoID;
    this.router.navigateByUrl('/StoryBacklog');
  }

  updUserStory() {
    this.userstoryService.updUserStory(this.storyitem[this.editUserStoID].us_ID, this.storyitem[this.editUserStoID].stakeholder, this.storyitem[this.editUserStoID].project_ID, this.storyitem[this.editUserStoID].titel, this.storyitem[this.editUserStoID].story, this.storyitem[this.editUserStoID].epic);

    this.useditor = false;
  }

  noEdit() {
    this.useditor = false;
  }
}
