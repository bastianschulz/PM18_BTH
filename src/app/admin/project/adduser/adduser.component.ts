import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {UserModel} from '../../../models/user.model';
import {MainService} from '../../../service/main.service';
import {ProjectService} from '../../../service/project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  unasuseritem: UserModel[] = [] as UserModel[];

  constructor(private projectService: ProjectService, private userService: UserService, private router: Router, private mainService: MainService) {

  }

  ngOnInit() {
    this.mainService.authCheck();
    this.loadUnAsUsers(this.projectService.selctedProjectID);
  }



  deleteuserfromProject(user_ID: number){

  }

  loadUnAsUsers(project_ID: number) {
    this.userService.getAllUnasUsers(project_ID).subscribe(
      data => {
        // befüllen des Arrays
        this.unasuseritem = [] as UserModel[];
        data.forEach(ergebnis => {
          this.unasuseritem.push(ergebnis);
        });
      }
    );
  }

  userToProject(user_ID: number) {
    this.projectService.postURL(user_ID, this.projectService.selctedProjectID)
    this.router.navigateByUrl('/Admin');
  }

}
