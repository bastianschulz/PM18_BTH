import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TaskService} from '../../service/task.service';
import {MainService} from '../../service/main.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  newtaskForm: NgForm;
  @ViewChild('newtaskForm') currentForm: NgForm;

  formErrors = {
    'titel': '',
    'info': '',
    'estHoMP': '',
    'erstelldatum': ''
  };

  titel: string;
  info: string;
  estHoMP: number;
  erstelldatum: Date = new Date();

  constructor(private taskService: TaskService, private router: Router, private mainService: MainService) { }

  ngOnInit() {
    this.mainService.authCheck();
  }

  onSubmit() {
    this.formChanged();
    this.taskService.postTask(this.titel, this.info, this.estHoMP, this.taskService.selectedBli, this.erstelldatum);
    this.router.navigateByUrl('/BacklogTask');
  }

  formChanged() {
    if (this.currentForm === this.newtaskForm) {
      return;
    }
    this.newtaskForm = this.currentForm;
    if (this.newtaskForm) {
      this.newtaskForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.newtaskForm) {
      return;
    }
    const form = this.newtaskForm.form;

    Object.keys(this.formErrors).map(field => {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
    });
  }
}
