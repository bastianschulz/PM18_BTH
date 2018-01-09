import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SprintService} from '../../service/sprint.service';
import {Router} from '@angular/router';
import {MainService} from '../../service/main.service';

@Component({
  selector: 'app-sprint-cockpit',
  templateUrl: './sprint-cockpit.component.html',
  styleUrls: ['./sprint-cockpit.component.css']
})
export class SprintCockpitComponent implements OnInit {

  newsprintForm: NgForm;
  @ViewChild('newuserForm') currentForm: NgForm;

  formErrors = {
    'titel': '',
    'start': '',
    'end': ''
  };

  titel: string;
  start: Date;
  end: Date;

  constructor(private sprintService: SprintService, private router: Router, private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.authCheck();
  }

  onSubmit() {
    this.formChanged();
    this.sprintService.postSprint(this.titel, this.start, this.end);
    this.router.navigateByUrl('/SprintPlanning');
  }

  formChanged() {
    if (this.currentForm === this.newsprintForm) {
      return;
    }
    this.newsprintForm = this.currentForm;
    if (this.newsprintForm) {
      this.newsprintForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.newsprintForm) {
      return;
    }
    const form = this.newsprintForm.form;

    Object.keys(this.formErrors).map(field => {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
    });
  }
}
