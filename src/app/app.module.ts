import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {DataTableModule} from 'angular2-datatable';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SprintItemComponent } from './sprint/sprint-item/sprint-item.component';
import { SprintItemEditComponent } from './Sprint/sprint-item-edit/sprint-item-edit.component';
import { SprintItemDetailComponent } from './Sprint/sprint-item-detail/sprint-item-detail.component';
import { SprintListComponent } from './Sprint/sprint-list/sprint-list.component';
import { SprintListEditComponent } from './Sprint/sprint-list-edit/sprint-list-edit.component';
import { ScrumBoardItemComponent } from './scrum-board/scrum-board-item/scrum-board-item.component';
import { TaskItemComponent } from './scrum-board/task-item/task-item.component';
import { TaskItemEditComponent } from './scrum-board/task-item-edit/task-item-edit.component';
import { TaskItemDetailComponent } from './scrum-board/task-item-detail/task-item-detail.component';
import { BurnDownChartItemComponent } from './burn-down/burn-down-chart-item/burn-down-chart-item.component';
import { IterationItemComponent } from './burn-down/iteration-item/iteration-item.component';
import { TimeSlotItemComponent } from './roadmap/time-slot-item/time-slot-item.component';
import { TimeSlotListComponent } from './Roadmap/time-slot-list/time-slot-list.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HeaderAfterLogInComponent } from './header-after-log-in/header-after-log-in.component';
import {RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { LogOutComponent } from './auth/log-out/log-out.component';
import {AuthService} from "./auth/auth.service/auth.service";

import { HomeComponent } from './home/home.component';
import { SprintComponent } from './sprint/sprint/sprint.component';
import { ScrumBoardComponent } from './scrum-board/scrum-board/scrum-board.component';
import { BacklogService } from './service/backlog.service';
import { UserService } from './service/user.service';
import { SprintService } from './service/sprint.service';
import { BackLogComponent } from './back-log/back-log.component';
import { BackLogElementComponent } from './back-log-element/back-log-element.component';
import { BackLogCockpitComponent } from './back-log-cockpit/back-log-cockpit.component';
import { SprintCockpitComponent } from './sprint/sprint-cockpit/sprint-cockpit.component';
import { AuthGuard } from './auth.guard';

const appRoutes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'LogIn', component: LogInComponent},
  {path: 'BackLog', component: BackLogComponent},
  {path: 'BackLog/Add', component: BackLogCockpitComponent},
  {path: 'ScrumBoard', component: ScrumBoardComponent},
  {path: 'ScrumBoard/AddTask', component: TaskItemComponent},
  {path: 'ScrumBoard/EditTask', component: TaskItemEditComponent},

  {path: 'SprintPlanning', component: SprintComponent},
  {path: 'SprintPlanning/Add', component: SprintCockpitComponent},
  {path: 'AfterLogin', canActivate: [AuthGuard], component:HomeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SprintItemComponent,
    SprintItemEditComponent,
    SprintItemDetailComponent,
    SprintListComponent,
    SprintListEditComponent,
    ScrumBoardItemComponent,
    TaskItemComponent,
    TaskItemEditComponent,
    TaskItemDetailComponent,
    BurnDownChartItemComponent,
    IterationItemComponent,
    TimeSlotItemComponent,
    TimeSlotListComponent,
    LogInComponent,
    RegisterComponent,
    HeaderAfterLogInComponent,
    UsersComponent,
    UserComponent,
    LogOutComponent,
    HomeComponent,
    SprintComponent,
    ScrumBoardComponent,
    BackLogComponent,
    BackLogElementComponent,
    BackLogCockpitComponent,
    SprintCockpitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    DataTableModule,
    JsonpModule
  ],
  providers: [AuthService, UserService, BacklogService, SprintService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
