/**
 * created by Harald
 * 09.01.2018
 */

import {ChartsModule} from 'ng2-charts';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {TaskModel} from "../models/task.model";
import {MainService} from "./main.service";
import {estHoMP} from "../models/estHoMP.model";
import {BurnDownModel} from "../models/burnDown.model";

@Injectable()
export class BurndownService {


  /* Adresse abhängig von Umgebung wählen */
  public actionUrl: string = 'http://localhost:3000/api';
  //private actionUrl: string = 'http://10.60.67.166:3000/api';
  options: RequestOptions;

  private pid: number;


  constructor(private http: Http, private mainService: MainService) {
    /**
     * Optionen für die Serveranfragen
     * @type {RequestOptions}
     */
    this.options = new RequestOptions({
      headers: new Headers({'Content-Type': 'application/json'}),
      withCredentials: false
    });
    /*
    Muss noch dynamisch gehalten werden
     */




  }




  /**
   * Holt die geschätzten Stunden für die Grundlinie
   *
   * @returns {Observable<Array<Number>>}
   */
  getEstHoMpbyPid(): Observable<Array<estHoMP>> {
    return this.http
      .get(this.actionUrl + '/getEstHoMPByPid?pid=1', this.options)
      .map((r: Response) => r.json());
  }

  /**
   *
   * @returns {Observable<Array<Number>>}
   */
  getTimeEntries(): Observable<Array<BurnDownModel>> {
    return this.http
      .get(this.actionUrl + '/getTimeEntrysByPid?pid=1', this.options)
      .map((r: Response) => r.json());
  }


}








