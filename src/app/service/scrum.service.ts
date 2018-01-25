/**
 * Created by Basti on 11.12.2017.
 */

import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { TaskModel } from '../models/task.model';
import { UserModel } from '../models/user.model';
import { TaskTO } from '../models/task.TO';

@Injectable()
export class ScrumService {

  /* Adresse abhängig von Umgebung wählen */
  //public actionUrl: string = 'http://localhost:3000/api';
  private actionUrl: string = 'http://10.60.67.166:3000/api';
  options: RequestOptions;

  constructor(private http: Http) {
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
   * alle Tasks vom Server laden
   * @returns {Observable<TaskModel>} Daten vom Server
   */
  getAllTasksForSB(pid: number): Observable<Array<TaskModel>> {
    return this.http
      .get(this.actionUrl+'/getAllTasksForSBbyPid?pid='+pid, this.options)
      .map((r: Response) => r.json());
  }

  /**
   * alle Tasks vom Server laden
   * @returns {Observable<TaskModel>} Daten vom Server
   */
  getAllUsersForSB(pid: number): Observable<Array<UserModel>> {
    return this.http
      .get(this.actionUrl+'/getAllUsersForSBbyPid?pid='+pid, this.options)
      .map((r: Response) => r.json());
  }
}
