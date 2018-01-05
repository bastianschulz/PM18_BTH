import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../auth.service/auth.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [AuthService]
})
export class LogInComponent implements OnInit {

  email: string;
  userPassword: string;




  constructor(private userService:UserService) {


  }

  ngOnInit() {
  }

  loginUser(){

    this.userService.verifyUser(this.email,this.userPassword);


  }


}
