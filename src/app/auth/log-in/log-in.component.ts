import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../auth.service/auth.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [AuthService]
})
export class LogInComponent implements OnInit {

  onLogIn(form: NgForm) {
    const email= form.value.email;
    const userPassword = form.value.userPassword;
    this.authService.logInUser(email,userPassword);

  }


  constructor(private authService:AuthService) {
  }

  ngOnInit() {
  }

}
