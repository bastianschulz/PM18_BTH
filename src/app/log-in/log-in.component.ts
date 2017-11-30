import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']

})
export class LogInComponent implements OnInit {

  angemeldet = false;

  anmeldungen: object [] = [];

  name: string;
  passwort: object;

  anmelden(name, passwort) {
    this.name = name;
    this.passwort = passwort;
    this.anmeldungen.push(name);
    this.anmeldungen.push(passwort);
    this.angemeldet = true;
  }


  constructor() {

  }

  ngOnInit() {
  }

}
