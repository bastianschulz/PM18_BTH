import {Component, OnInit} from '@angular/core';
import {MainService} from "../service/main.service";
import {Router} from '@angular/router';

import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  uname: string;
  passwd: string;

  useritem: UserModel[] = [] as UserModel[];

  wrongLogin = false;

  constructor(private mainService: MainService, private router: Router) {

  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.mainService.getAllUsers().subscribe(
      data => {
        // befüllen des Arrays
        this.useritem = [] as UserModel[];
        data.forEach(ergebnis => {
          this.useritem.push(ergebnis);
        });
      }
    );
  }

  login() {
    this.wrongLogin = false;
    var i: number = this.useritem.length - 1;
    for (i; i >= 0; i--) {
      if (this.useritem[i].uname === this.uname) {
        if (this.useritem[i].passwd === this.passwd) {
          this.mainService.UserID = this.useritem[i].user_ID;
          this.mainService.Username = this.useritem[i].uname;
          this.mainService.authenticated = true;
          this.mainService.loadPRL();
          this.router.navigateByUrl('/');
        }
      }
      this.wrongLogin = true;
    }
  }

// TODO löschen!!!!!!!!!!!!!!!!
  loginbasti() {
    this.uname = "Bastian";
    this.passwd = "Bastian";
    this.login();
  }

  loginadmin() {
    this.uname = "Admin";
    this.passwd = "Admin";
    this.login();
  }

  logintorben() {
    this.uname = "Torben";
    this.passwd = "Torben";
    this.login();
  }

  loginharald() {
    this.uname = "Harald";
    this.passwd = "Harald";
    this.login();
  }
}
