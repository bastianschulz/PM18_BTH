/**
 * Created by Basti on 11.12.2017.
 */

import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { SprintModel } from '../models/sprint.model';
import { SprintTO } from '../models/sprint.TO';

@Injectable()
export class SprintService {

  // Observable sources
  private newSprintArraySource = new Subject<SprintModel[]>();
  private newSprintSource = new Subject<SprintModel>();

  // Observable streams
  newSprintArray$ = this.newSprintArraySource.asObservable();
  newSprint$ = this.newSprintSource.asObservable();

  sprintItems: Map<number, SprintModel>;


  /* Adresse abhängig von Umgebung wählen */
  private actionUrl: string = 'http://localhost:3000/api';
  //private actionUrl: string = 'http://10.60.67.166:3000/api';
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
   * alle Sprints vom Server laden
   * @returns {Observable<SprintModel>} Daten vom Server
   */
  getAllSprints(): Observable<Array<SprintModel>> {
    return this.http
      .get(this.actionUrl+'/getAllSprints', this.options)
      .map((r: Response) => r.json());
  }

  /**
   * Sprint anlegen
   * @param titel
   * @param start
   * @param end
   * @returns {Observable<void>} ok oder != ok
   */
  postSprint(titel: string, start: Date, end: Date) {
    const sprintTO: SprintTO = ({
      titel: titel,
      start: start,
      end: end
    }) as SprintTO;

    console.log('postsprint: ' + JSON.stringify(sprintTO));

    this.http.post(this.actionUrl+'/postSprint', sprintTO, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }

  /**
   * Sprint per sprint_ID updaten
   * @returns {Observable<TaskModel>} Daten vom Server
   */
  updSprint(sid: number, tit: string, start: string, end: string, stat: string): Observable<Response> {
    return this.http
      .head(this.actionUrl+'/updSprint?sid='+sid+'&tit='+tit+'&start='+start+'&end='+end+'&stat='+stat, this.options);
  }

}
