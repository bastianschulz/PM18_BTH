/**
 * Created by Basti on 11.12.2017.
 */

import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import {SprintModel} from '../models/sprint.model';
import {SprintTO} from '../models/sprint.TO';
import {Router} from "@angular/router";
import {TaskService} from "./task.service";

@Injectable()
export class SprintService {

  /* Adresse abhängig von Umgebung wählen */
  //public actionUrl: string = 'http://localhost:3000/api';
  private actionUrl: string = 'http://10.60.67.166:3000/api';
  options: RequestOptions;

  selectedSprint: number;
  selectedTask: number;
  selectedUser: number;
  empty: number;

  constructor(private http: Http, private router: Router, private taskService: TaskService) {
    /**
     * Optionen für die Serveranfragen
     * @type {RequestOptions}
     */
    this.options = new RequestOptions({
      headers: new Headers({'Content-Type': 'application/json'}),
      withCredentials: false
    });
  }

  /**
   * alle Sprints vom Server laden
   * @returns {Observable<SprintModel>} Daten vom Server
   */
  getAllSprintsByPid(pid: number): Observable<Array<SprintModel>> {
    return this.http
      .get(this.actionUrl + '/getAllSprintsByPid?pid=' + pid, this.options)
      .map((r: Response) => r.json());
  }

  /**
   * Sprint anlegen
   * @param titel
   * @param start
   * @param end
   * @param project_ID
   * @returns {Observable<void>} ok oder != ok
   */
  postSprint(titel: string, start: Date, end: Date, project_ID: number) {
    const sprintTO: SprintTO = ({
      titel: titel,
      start: start,
      end: end,
      project_ID: project_ID
    }) as SprintTO;

    this.http.post(this.actionUrl + '/postSprint', sprintTO, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }


  /**
   * Sprint per sprint_ID updaten
   * @returns {Observable<TaskModel>} Daten vom Server
   */
  updSprint(sid: number, tit: string, start: string, end: string, stat: string): Observable<void> {
    this.http
      .post(this.actionUrl + '/updSprint?sid=' + sid + '&tit=' + tit + '&start=' + start + '&end=' + end + '&stat=' + stat, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }

  setSelectedUser(uid: number) {
    this.selectedUser = uid;
    if (this.selectedTask == null) {
    } else {
      this.taskToSprint();
    }
  }

  setSelectedTask(tid: number) {
    this.selectedTask = tid;
    if (this.selectedUser == null) {
    } else {
      this.taskToSprint();
    }
  }

  taskToSprint() {
    console.log('-->> ' + this.selectedTask + ' / ' + this.selectedSprint + ' / ' + this.selectedUser)
    this.taskService.asTask(this.selectedTask, this.selectedSprint, this.selectedUser);
    this.selectedTask = this.empty;
    this.selectedSprint = this.empty;
    this.selectedUser = this.empty;
    this.router.navigateByUrl('/Sprint/Task');
  }
}
