import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
//import {AuthService} from "../auth.service/auth.service";
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
 // providers: [AuthService]
})
export class LogInComponent implements OnInit {

  onLogIn(form: NgForm) {
    const email= form.value.email;
    const userPassword = form.value.userPassword;
    //this.authService.logInUser(email,userPassword);

  }


  constructor(private router:Router, private user:UserService) {
  }

  ngOnInit() {
  }
 /*  loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log (username, password);

    if(username == 'Torben' && password =='123')

    this.router.navigate(['AfterLogin']);
    this.user.setUserLoggedIn;

 } */
}
