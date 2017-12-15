import { Component, OnInit } from '@angular/core';
import { BacklogItemModel } from '../../models/backLogItem.model';
import { BacklogService } from '../../service/backlog.service';

@Component({
  selector: 'app-backlog-item-list',
  templateUrl: './backlog-item-list.component.html',
  styleUrls: ['./backlog-item-list.component.css']
})
export class BacklogItemListComponent implements OnInit {

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
        for (let i = 0; i < data.length; i++) {
          this.backlogService.backlogItems.set(data[i].bli_ID, data[i]);
        }
      }
    );
  }

}
