/**
 * Created by Basti on 11.12.2017.
 */

import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import {PRLModel} from '../models/prl.model';
import {ProjectModel} from '../models/projekt.model';
import {ProjectTO} from '../models/projekt.TO';

@Injectable()
export class ProjectService {

  // Observable sources
  private newProjectArraySource = new Subject<ProjectModel[]>();
  private newProjectSource = new Subject<ProjectModel>();

  // Observable streams
  newProjectArray$ = this.newProjectArraySource.asObservable();
  newProject$ = this.newProjectSource.asObservable();

  projectitems: Map<number, ProjectModel>;

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

}
