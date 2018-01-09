import { Component, OnInit } from '@angular/core';
import {MainService} from '../../service/main.service';

@Component({
  selector: 'app-scrum-board-item',
  templateUrl: './scrum-board-item.component.html',
  styleUrls: ['./scrum-board-item.component.css']
})
export class ScrumBoardItemComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.authCheck();
  }

}
