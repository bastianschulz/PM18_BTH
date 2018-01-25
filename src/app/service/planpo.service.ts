
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {PlaningPokerModel} from "../models/planingPoker.model";

@Injectable()
export class PlanpoService {

  /* Adresse abhängig von Umgebung wählen */
  //public actionUrl: string = 'http://localhost:3000/api';
  private actionUrl: string = 'http://10.60.67.166:3000/api';
  options: RequestOptions;

  pptask: number;
  emptynumber: number;

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

  getPPByPid(pid: number): Observable<Array<PlaningPokerModel>> {
    return this.http
      .get(this.actionUrl + '/getPPByPid?pid=' + pid, this.options)
      .map((r: Response) => r.json());
  }

  reset(){
    this.pptask=this.emptynumber;
  }


}
