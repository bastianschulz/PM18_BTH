import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../service/task.service';
import {MainService} from '../../../../service/main.service';
import {SprintService} from '../../../../service/sprint.service';
import {UserModel} from '../../../../models/user.model';
import {Router} from '@angular/router';
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'app-seluser',
  templateUrl: './seluser.component.html',
  styleUrls: ['./seluser.component.css']
})
export class SeluserComponent implements OnInit {

  users: UserModel[] = [] as UserModel[];
  selectedUser_ID: number;
  empty: number;

  constructor(private taskService: TaskService, private sprintService: SprintService, private router: Router, private mainService: MainService, private userService: UserService) {

  }

  ngOnInit() {
    this.mainService.authCheck();
    this.selectedUser_ID = this.empty;
    this.loadProjectUsers();
  }

  loadProjectUsers() {
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
    this.sprintService.setSelectedUser(user_ID);
  }

}
