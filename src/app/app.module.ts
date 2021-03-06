import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import {ChartsModule} from 'ng2-charts';
import {DragulaModule} from 'ng2-dragula';

import {BacklogService} from './service/backlog.service';
import {UserService} from './service/user.service';
import {SprintService} from './service/sprint.service';
import {MainService} from './service/main.service';
import {ScrumService} from './service/scrum.service';
import {TaskService} from './service/task.service';
import {ProjectService} from './service/project.service';
import {BurndownService} from "./service/burndown.service";
import {PlanpoService} from './service/planpo.service';
import {UserstoryService} from "./service/userstory.service";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {TaskItemComponent} from './scrum-board/task-item/task-item.component';
import {BurnDownChartItemComponent} from './burn-down/burn-down-chart-item/burn-down-chart-item.component';
import {IterationItemComponent} from './burn-down/iteration-item/iteration-item.component';
import {TimeSlotItemComponent} from './roadmap/time-slot-item/time-slot-item.component';
import {TimeSlotListComponent} from './Roadmap/time-slot-list/time-slot-list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HeaderAfterLogInComponent} from './header-after-log-in/header-after-log-in.component';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';
import {ScrumBoardComponent} from './scrum-board/scrum-board/scrum-board.component';
import {BackLogComponent} from './back-log/back-log.component';
import {BackLogElementComponent} from './back-log-element/back-log-element.component';
import {BackLogCockpitComponent} from './back-log-cockpit/back-log-cockpit.component';
import {AdminComponent} from './admin/admin.component';
import {AdminproComponent} from './admin/adminpro/adminpro.component';
import {AdminuserComponent} from './admin/adminuser/adminuser.component';
import {AdminredoComponent} from './admin/adminredo/adminredo.component';
import {AdminusernewComponent} from './admin/adminuser/adminusernew/adminusernew.component';
import {AdminpronewComponent} from './admin/adminpro/adminpronew/adminpronew.component';
import {ProjectComponent} from './admin/project/project.component';
import {AdduserComponent} from './admin/project/adduser/adduser.component';
import {UserstoryComponent} from './userstory/userstory.component';
import {PlanningpokerComponent} from './planningpoker/planningpoker.component';
import {AdduserstoryComponent} from './userstory/adduserstory/adduserstory.component';
import {StorybacklogComponent} from './userstory/storybacklog/storybacklog.component';
import {BacklogTaskComponent} from './back-log/backlog-task/backlog-task.component';
import {SprintCockpitComponent} from './sprint/sprint-cockpit/sprint-cockpit.component';
import {SprintComponent} from './sprint/sprint/sprint.component';
import {SprintListComponent} from './Sprint/sprint-list/sprint-list.component';
import {SprintListEditComponent} from './Sprint/sprint-list-edit/sprint-list-edit.component';
import {TasksprintComponent} from './sprint/sprint-list-edit/tasksprint/tasksprint.component';
import {SeltaskComponent} from './sprint/sprint-list-edit/tasksprint/seltask/seltask.component';
import {SeluserComponent} from './sprint/sprint-list-edit/tasksprint/seluser/seluser.component';
import {SetTusComponent} from './sprint/sprint-list-edit/tasksprint/set-tus/set-tus.component';
import {AddplanningpokerComponent} from './planningpoker/addplanningpoker/addplanningpoker.component';
import {SeluserppComponent} from './planningpoker/addplanningpoker/seluserpp/seluserpp.component';
import {TaskboardComponent} from './taskboard/taskboard.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'BackLog', component: BackLogComponent},
  {path: 'BackLog/Add', component: BackLogCockpitComponent},
  {path: 'ScrumBoard', component: ScrumBoardComponent},
  {path: 'ScrumBoard/AddTask', component: TaskItemComponent},
  {path: 'SprintPlanning', component: SprintComponent},
  {path: 'SprintPlanning/Add', component: SprintCockpitComponent},
  {path: 'Admin', component: AdminComponent},
  {path: 'Sprint/Task', component: SprintListEditComponent},
  {path: 'Sprint/TaskSprint', component: TasksprintComponent},
  {path: 'Projekt/Add', component: AdminpronewComponent},
  {path: 'Projekt/Conf', component: ProjectComponent},
  {path: 'User/Add', component: AdminusernewComponent},
  {path: 'Projekt/AddUser', component: AdduserComponent},
  {path: 'BurnDown', component: BurnDownChartItemComponent},
  {path: 'UserStory', component: UserstoryComponent},
  {path: 'UserStory/Add', component: AdduserstoryComponent},
  {path: 'PlanningPoker', component: PlanningpokerComponent},
  {path: 'PlanningPoker/Add', component: AddplanningpokerComponent},
  {path: 'StoryBacklog', component: StorybacklogComponent},
  {path: 'BacklogTask', component: BacklogTaskComponent},
  {path: 'TaskBoard', component: TaskboardComponent},
  {path: 'Roadmap', component: TimeSlotItemComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SprintListComponent,
    SprintListEditComponent,
    TaskItemComponent,
    BurnDownChartItemComponent,
    IterationItemComponent,
    TimeSlotItemComponent,
    TimeSlotListComponent,
    LoginComponent,
    RegisterComponent,
    HeaderAfterLogInComponent,
    UsersComponent,
    HomeComponent,
    SprintComponent,
    ScrumBoardComponent,
    BackLogComponent,
    BackLogElementComponent,
    BackLogCockpitComponent,
    SprintCockpitComponent,
    AdminComponent,
    AdminproComponent,
    AdminuserComponent,
    AdminredoComponent,
    AdminusernewComponent,
    AdminpronewComponent,
    ProjectComponent,
    AdduserComponent,
    UserstoryComponent,
    PlanningpokerComponent,
    AdduserstoryComponent,
    StorybacklogComponent,
    BacklogTaskComponent,
    TasksprintComponent,
    SeltaskComponent,
    SeluserComponent,
    SetTusComponent,
    AddplanningpokerComponent,
    SeluserppComponent,
    TaskboardComponent,
      ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    DataTableModule,
    JsonpModule,
    ChartsModule,
    DragulaModule

  ],
  providers: [BurndownService, ProjectService, BacklogService, SprintService, TaskService,
    ScrumService, MainService, ProjectService, UserService, PlanpoService, UserstoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
