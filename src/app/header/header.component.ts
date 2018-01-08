import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MainService } from '../service/main.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
  }
}
