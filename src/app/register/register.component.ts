import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth/auth.service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {
  onRegister(form: NgForm) {
    const email= form.value.email;
    const userpasswort = form.value.password;
    this.authService.signUpUser(email,userpasswort);

  }


  constructor(private authService:AuthService) {
  }

  ngOnInit() {
  }

}
