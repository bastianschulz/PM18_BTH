import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-back-log-cockpit',
  templateUrl: './back-log-cockpit.component.html',
  styleUrls: ['./back-log-cockpit.component.css']
})
export class BackLogCockpitComponent implements OnInit {

  // @Output
  // beim Anlegen einer BacklogsInstanz werden diese an das Backlog übergeben.

  // onAddBackLog(backlogbeschreibung:string, backlogname:string){
  //
  //
  // }

  constructor() { }

  ngOnInit() {
  }

}
