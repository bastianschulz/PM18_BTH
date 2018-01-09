import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { UserModel } from '../../models/user.model';
import {MainService} from '../../service/main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {

  usereditor: boolean = false;
  editUserID: number;
  emptynumber: number;

  useritem: UserModel[] = [] as UserModel[];

  constructor(private userService: UserService, private router: Router, private mainService: MainService) {

  }

  ngOnInit() {
    this.mainService.authCheck();
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        // befüllen des Arrays
        this.useritem = [] as UserModel[];
        data.forEach(ergebnis => {
          this.useritem.push(ergebnis);
        });
      }
    );
  }

  clickedOnEdit(user_ID: number) {
    this.editUserID = this.emptynumber;

    var i: number = this.useritem.length - 1;

    for (i; i >= 0; i--) {
      if (this.useritem[i].user_ID === user_ID) {
        this.editUserID = i;
      }
    }

    this.usereditor = true;
  }

  updUser() {
    var gelflag = 0;
    if (this.useritem[this.editUserID].geloescht==true){
      gelflag=1
    }
    this.userService.updUser(this.useritem[this.editUserID].user_ID, this.useritem[this.editUserID].uname, this.useritem[this.editUserID].email, gelflag);

    this.usereditor = false;
  }

  noEdit() {
    this.usereditor = false;
  }
}
