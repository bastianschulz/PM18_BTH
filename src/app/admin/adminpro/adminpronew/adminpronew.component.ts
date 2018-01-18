import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProjectService} from '../../../service/project.service';
import {Router} from '@angular/router';
import {MainService} from '../../../service/main.service';

@Component({
  selector: 'app-adminpronew',
  templateUrl: './adminpronew.component.html',
  styleUrls: ['./adminpronew.component.css']
})
export class AdminpronewComponent implements OnInit {

  newprojectForm: NgForm;
  @ViewChild('newuserForm') currentForm: NgForm;

  formErrors = {
    'titel': '',
    'info': ''
  };

  titel: string;
  info: string;

  constructor(private projectService: ProjectService, private router: Router, private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.authCheck();
  }

  onSubmit() {
    this.formChanged();
    this.projectService.postProject(this.titel, this.info);
    this.router.navigateByUrl('/Admin');
  }

  formChanged() {
    if (this.currentForm === this.newprojectForm) {
      return;
    }
    this.newprojectForm = this.currentForm;
    if (this.newprojectForm) {
      this.newprojectForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.newprojectForm) {
      return;
    }
    const form = this.newprojectForm.form;

    Object.keys(this.formErrors).map(field => {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
    });
  }
}
