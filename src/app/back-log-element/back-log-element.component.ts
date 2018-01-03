import { Component, OnInit } from '@angular/core';
import { BacklogItemModel } from '../models/backLogItem.model';
import { BacklogService } from '../service/backlog.service';


@Component({
  selector: 'app-back-log-element',
  templateUrl: './back-log-element.component.html',
  styleUrls: ['./back-log-element.component.css']
})
export class BackLogElementComponent implements OnInit {

  backlogitem: BacklogItemModel[] = [] as BacklogItemModel[];

  constructor(private backlogService: BacklogService) {
    backlogService.newBacklogItemArray$.subscribe(
      newBacklogItemArray => {
        this.backlogitem = newBacklogItemArray;
      });
  }

  ngOnInit() {
    this.loadBacklogItems();
  }

  loadBacklogItems() {
    this.backlogService.getAllBacklogItems().subscribe(
      data => {
        // befüllen des Arrays
        this.backlogitem = [] as BacklogItemModel[];
        data.forEach(ergebnis => {
          this.backlogitem.push(ergebnis);
        });

        // Was macht die untere Schleife???
        // set (...) wirft einen Type Error...

        /*for (let i = 0; i < data.length; i++) {
          this.backlogService.backlogItems.set(data[i].bli_ID, data[i]);
        }*/
      }
    );
  }

  onAddBackLog(){

  }
}
