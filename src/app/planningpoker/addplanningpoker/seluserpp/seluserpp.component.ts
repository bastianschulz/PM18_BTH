import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../service/task.service';
import {MainService} from '../../../service/main.service';
import {SprintService} from '../../../service/sprint.service';
import {UserModel} from '../../../models/user.model';
import {Router} from '@angular/router';
import {UserService} from "../../../service/user.service";
import {PlanpoService} from "../../../service/planpo.service";
import {PPUserModel} from "../../../models/ppuser.model";

@Component({
  selector: 'app-seluserpp',
  templateUrl: './seluserpp.component.html',
  styleUrls: ['./seluserpp.component.css']
})
export class SeluserppComponent implements OnInit {

  users: UserModel[] = [] as UserModel[];
  selectedUser_ID: number;
  empty: number;
  ppUsers: PPUserModel[] = [] as PPUserModel[];

  constructor(private planpoService: PlanpoService, private taskService: TaskService, private sprintService: SprintService, private router: Router, private mainService: MainService, private userService: UserService) {

  }

  ngOnInit() {
    this.mainService.authCheck();
    this.selectedUser_ID = this.empty;
    this.loadProjectUsers();
  }

  loadProjectUsers(){
    this.getProjectUsers();

    var i = this.users.length;
    for (i; i >= 0; i--) {
      this.ppUsers.push(this.users[i]);
    }
    for (i; i >= 0; i--){
      this.ppUsers[i].pp = false;
    }
  }

  getProjectUsers() {
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

  selectUser(user_ID: number){
    this.ppUsers[user_ID].pp = true;
  }

  deselectUser(user_ID: number){
    this.ppUsers[user_ID].pp = false;
  }

}
