import { Component, OnInit } from '@angular/core';
import { UserService } from '/Users/torben/WebstormProjects/PM18_BTH/src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit() {
  }

}
