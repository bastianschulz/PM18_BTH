import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserStoryModel } from '../../models/userstory.model';
import { UserstoryService } from '../../service/userstory.service';
import {MainService} from '../../service/main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adduserstory',
  templateUrl: './adduserstory.component.html',
  styleUrls: ['./adduserstory.component.css']
})
export class AdduserstoryComponent implements OnInit {

  newusForm: NgForm;
  @ViewChild('newusForm') currentForm: NgForm;

  formErrors = {
    'stakeholder': '',
    'titel': '',
    'story': '',
    'epic': ''
  };

  stakeholder: string;
  titel: string;
  story: string;
  epic: number = 0;

  constructor(private userstoryService: UserstoryService, private router: Router, private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.authCheck();
  }

  onSubmit() {
    this.formChanged();
    this.userstoryService.postStoryItem(this. stakeholder, this.mainService.selectedProject, this.titel, this.story, this.epic);
    this.router.navigateByUrl('/UserStory');
  }

  formChanged() {
    if (this.currentForm === this.newusForm) {
      return;
    }
    this.newusForm = this.currentForm;
    if (this.newusForm) {
      this.newusForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.newusForm) {
      return;
    }
    const form = this.newusForm.form;

    Object.keys(this.formErrors).map(field => {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
    });
  }
}
