import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BacklogService} from '../service/backlog.service';
import {MainService} from '../service/main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-back-log-cockpit',
  templateUrl: './back-log-cockpit.component.html',
  styleUrls: ['./back-log-cockpit.component.css']
})
export class BackLogCockpitComponent implements OnInit {

  newbliForm: NgForm;
  @ViewChild('newbliForm') currentForm: NgForm;

  formErrors = {
    'titel': '',
    'info': ''
  };

  titel: string;
  info: string;

  constructor(private backlogService: BacklogService, private router: Router, private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.authCheck();
  }

  onSubmit() {
    this.formChanged();
    this.backlogService.postBacklogItem(this.titel, this.info);
    this.router.navigateByUrl('/BackLog');
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
