import {Component, OnInit} from '@angular/core';
import {BacklogItemModel} from '../../models/backLogItem.model';
import {BacklogService} from '../../service/backlog.service';
import {UserstoryService} from '../../service/userstory.service';
import {MainService} from '../../service/main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-storybacklog',
  templateUrl: './storybacklog.component.html',
  styleUrls: ['./storybacklog.component.css']
})
export class StorybacklogComponent implements OnInit {

  blieditor: boolean = false;
  editBliID: number;
  emptynumber: number;


  deletereq: boolean = false;

  backlogitem: BacklogItemModel[] = [] as BacklogItemModel[];

  constructor(private backlogService: BacklogService, private router: Router, private mainService: MainService, private userstoryService:UserstoryService) {
  }

  ngOnInit() {
    this.mainService.authCheck();
    this.loadBacklogItems();
  }

  loadBacklogItems() {
    this.backlogService.getAllBacklogItemsByUsid(this.userstoryService.selectedUserStoID).subscribe(
      data => {
        // befüllen des Arrays
        this.backlogitem = [] as BacklogItemModel[];
        data.forEach(ergebnis => {
          this.backlogitem.push(ergebnis);
        });
      }
    );
  }

  clickedOnEdit(bli_ID: number) {
    this.editBliID = this.emptynumber;

    var i: number = this.backlogitem.length - 1;

    for (i; i >= 0; i--) {
      if (this.backlogitem[i].bli_ID === bli_ID) {
        this.editBliID = i;
      }
    }

    this.blieditor = true;
  }

  updBacklogItem() {
    //this.backlogService.updBli(this.backlogitem[this.editBliID].bli_ID, this.backlogitem[this.editBliID].titel, this.backlogitem[this.editBliID].info, this.backlogitem[this.editBliID].status, this.backlogitem[this.editBliID].priority, this.backlogitem[this.editBliID].geloescht);

    this.blieditor = false;
  }

  noEdit() {
    this.blieditor = false;
  }

  reqDel(){
    //this.deletereq = true;
  }

  deleteItem(){
    this.backlogService.delBli(this.backlogitem[this.editBliID].bli_ID, this.backlogitem[this.editBliID].titel, this.backlogitem[this.editBliID].info, this.backlogitem[this.editBliID].status, this.backlogitem[this.editBliID].priority, this.backlogitem[this.editBliID].geloescht);

    this.deletereq = false;
    this.blieditor = false;
    this.router.navigateByUrl('/BackLog');
  }
}
