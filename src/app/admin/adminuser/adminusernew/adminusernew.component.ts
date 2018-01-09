import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {MainService} from '../../../service/main.service';

@Component({
  selector: 'app-adminusernew',
  templateUrl: './adminusernew.component.html',
  styleUrls: ['./adminusernew.component.css']
})
export class AdminusernewComponent implements OnInit {

  newuserForm: NgForm;
  @ViewChild('newuserForm') currentForm: NgForm;

  formErrors = {
    'uname': '',
    'email': '',
    'passwd': ''
  };

  uname: string;
  email: string;
  passwd: string;

  constructor(private userService: UserService, private router: Router, private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.authCheck();
  }

  onSubmit() {
    this.formChanged();
    this.userService.postUser(this.uname, this.email, this.passwd);
    this.router.navigateByUrl('/Admin');
  }

  formChanged() {
    if (this.currentForm === this.newuserForm) {
      return;
    }
    this.newuserForm = this.currentForm;
    if (this.newuserForm) {
      this.newuserForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.newuserForm) {
      return;
    }
    const form = this.newuserForm.form;

    Object.keys(this.formErrors).map(field => {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
    });
  }
}
