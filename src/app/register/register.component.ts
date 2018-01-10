import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  onRegister(form: NgForm) {
    const email = form.value.email;
    const userpasswort = form.value.password;

  }


  constructor() {
  }

  ngOnInit() {
  }

}
