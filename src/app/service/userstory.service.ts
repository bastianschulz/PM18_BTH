import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import {UserStoryModel} from '../models/userstory.model';
import {UserStoryTO} from '../models/userstory.TO';

@Injectable()
export class UserstoryService {

  /* Adresse abhängig von Umgebung wählen */
  //public actionUrl: string = 'http://localhost:3000/api';
  private actionUrl: string = 'http://10.60.67.166:3000/api';
  options: RequestOptions;

  selectedUserStoID:number;

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

  getAllUserstory(pid: number): Observable<Array<UserStoryModel>> {
    return this.http
      .get(this.actionUrl + '/getAllUserstoryByPid?pid=' + pid, this.options)
      .map((r: Response) => r.json());
  }

  postStoryItem(stakeholder: string, project_ID: number, titel: string, story: string, epic: number) {
    const userstoryTO: UserStoryTO = ({
      stakeholder: stakeholder,
      project_ID: project_ID,
      titel: titel,
      story: story,
      epic: epic
    }) as UserStoryTO;

    this.http.post(this.actionUrl + '/postUserstory', userstoryTO, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }

  updUserStory(usid: number, stake: string, pid: number, tit: string, sto: string, epi: number): Observable<void> {
    this.http
      .post(this.actionUrl + '/updUserstory?usid=' + usid + '&stake=' + stake + '&pid=' + pid + '&tit=' + tit + '&sto=' + sto + '&epi=' + epi, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }
}
