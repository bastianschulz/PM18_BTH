/**
 * Created by Basti on 11.12.2017.
 */

import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {PRLModel} from '../models/prl.model';
import {ProjectModel} from '../models/projekt.model';
import {URLModel} from '../models/url.model';
import {ProjectTO} from '../models/projekt.TO';
import {URLTO} from '../models/url.TO';

@Injectable()
export class ProjectService {

  /* Adresse abhängig von Umgebung wählen */
  // public actionUrl: string = 'http://localhost:3000/api';
 private actionUrl: string = 'http://10.60.67.166:3000/api';
  options: RequestOptions;

  selctedProjectID: number;


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

  getPRL(UserID: number): Observable<Array<PRLModel>> {
    return this.http
      .get(this.actionUrl+'/getPRL?uid='+UserID, this.options)
      .map((r: Response) => r.json());
  }

  getAllProjects(): Observable<Array<ProjectModel>> {
    return this.http
      .get(this.actionUrl + '/getAllProjects', this.options)
      .map((r: Response) => r.json());
  }

  postProject(titel: string, info: string) {
    const projectTO: ProjectTO = ({
      titel: titel,
      info: info
    }) as ProjectTO;

    this.http.post(this.actionUrl + '/postProject', projectTO, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }

  updProject(pid: number, tit: string, info: string): Observable<void> {
    this.http
      .post(this.actionUrl + '/updProject?pid=' + pid + '&tit=' + tit + '&info=' + info, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }

  getURLByPid(pID: number): Observable<Array<URLModel>> {
    return this.http
      .get(this.actionUrl+'/getURLByPid?pid='+pID, this.options)
      .map((r: Response) => r.json());
  }

  postURL(user_ID:number, project_ID:number) {
    const urlTO: URLTO = ({
      user_ID: user_ID,
      project_ID: project_ID,
      scrum: 0,
      user: 0,
      stake: 1
    }) as URLTO;

    this.http.post(this.actionUrl + '/postURL', urlTO, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }

  delURI(uri_ID:number) {
    this.http.post(this.actionUrl + '/delURI?urid='+uri_ID, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }

  updURI(urid: number, sm: number, us: number, sh: number): Observable<void> {
    this.http
      .post(this.actionUrl + '/updURI?urid=' + urid + '&sm=' + sm + '&us=' + us + '&sh=' + sh, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }
}
