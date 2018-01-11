import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BacklogService} from '../service/backlog.service';
import {MainService} from '../service/main.service';
import {Router} from '@angular/router';
import {UserstoryService} from "../service/userstory.service";

@Component({
  selector: 'app-back-log-cockpit',
  templateUrl: './back-log-cockpit.component.html',
  styleUrls: ['./back-log-cockpit.component.css']
})
export class BackLogCockpitComponent implements OnInit {

  newbliForm: NgForm;
  @ViewChild('newusForm') currentForm: NgForm;

  formErrors = {
    'titel': '',
    'info': ''
  };

  titel: string;
  info: string;
  status: string='aktiv';
  priority: string='mittel';

  constructor(private backlogService: BacklogService, private storyservice: UserstoryService, private router: Router, private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.authCheck();
  }

  onSubmit() {
    this.formChanged();
    this.backlogService.postBacklogItem(this.titel, this.info, this.status, this.priority, this.storyservice.selectedUserStoID, this.mainService.selectedProject);
    this.router.navigateByUrl('/StoryBacklog');
  }

  formChanged() {
    if (this.currentForm === this.newbliForm) {
      return;
    }
    this.newbliForm = this.currentForm;
    if (this.newbliForm) {
      this.newbliForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.newbliForm) {
      return;
    }
    const form = this.newbliForm.form;

    Object.keys(this.formErrors).map(field => {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
    });
  }
}
