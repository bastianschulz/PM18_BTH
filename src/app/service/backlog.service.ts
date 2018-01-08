/**
 * Created by Basti on 11.12.2017.
 */

import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { BacklogItemModel } from '../models/backLogItem.model';
import { BacklogItemTO } from '../models/backLogItem.TO';

@Injectable()
export class BacklogService {

  // Observable sources
  private newBacklogItemArraySource = new Subject<BacklogItemModel[]>();
  private newBacklogItemSource = new Subject<BacklogItemModel>();

  // Observable streams
  newBacklogItemArray$ = this.newBacklogItemArraySource.asObservable();
  newBacklogItem$ = this.newBacklogItemSource.asObservable();

  backlogItems: Map<number, BacklogItemModel>;


  /* Adresse abhängig von Umgebung wählen */
 // private actionUrl: string = 'http://localhost:3000/api';
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
   * alle BacklogItems vom Server laden
   * @returns {Observable<BacklogItemModel>} Daten vom Server
   */
  getAllBacklogItems(): Observable<Array<BacklogItemModel>> {
    return this.http
      .get(this.actionUrl+'/getAllBacklogitems', this.options)
      .map((r: Response) => r.json());
  }

  /**
   * BacklogItem anlegen
   * @param titel
   * @param info
   * @returns {Observable<void>} ok oder != ok
   */
  postBacklogItem(titel: string, info: string) {
    const backlogitemTO: BacklogItemTO = ({
      titel: titel,
      info: info
    }) as BacklogItemTO;

    this.http.post(this.actionUrl+'/postBacklogitem', backlogitemTO, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }

  /**
   * Holt ein BacklogItem mit Hilfe der ID vom Server
   *
   * @param {number} bli_ID
   * BacklogItem ID
   * @returns {Observable<BacklogItemModel>}
   * Backlog ITem vom Server
   */
  getBacklogItemByID(bli_ID:number): Observable<BacklogItemModel>{
    return this.http.get(this.actionUrl+'/getBacklogItemByID',this.options).map((singleR:Response) => singleR.json());

  }

  /**
   * Task per task_ID updaten
   * @returns {Observable<TaskModel>} Daten vom Server
   */
  updBli(bli_ID: number, titel: string, info: string, status: string, priority: string, geloescht: number): Observable<void> {
    this.http
      .post(this.actionUrl + '/updBacklogitem?bliid=' + bli_ID + '&tit=' + titel + '&inf=' + info + '&stat=' + status + '&prio=' + priority + '&ge=' + geloescht, this.options)
  .map((r: Response) => r.json())
      .subscribe();
    return;
  }

  delBli(bli_ID:number){
    this.http.post(this.actionUrl + '/updBacklogitem?bliid=' + bli_ID + '&ge=' + 1,this.options).map((r:Response) => r.json()).subscribe();
    return;
  }

}
