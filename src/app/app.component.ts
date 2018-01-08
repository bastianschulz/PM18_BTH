import {Component, OnInit} from '@angular/core';
import {MainService} from './service/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
  }

  authenticated() {
    return this.mainService.authenticated;
  }


}
