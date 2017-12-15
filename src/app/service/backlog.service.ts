/**
 * Created by Basti on 11.12.2017.
 */

import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { BacklogItemModel } from '../models/backLogItem.model';


@Injectable()
export class BacklogService {

  // Observable sources
  private newBacklogItemArraySource = new Subject<BacklogItemModel[]>();
  private newBacklogItemSource = new Subject<BacklogItemModel>();

  // Observable streams
  newBacklogItemArray$ = this.newBacklogItemArraySource.asObservable();
  newBacklogItem$ = this.newBacklogItemSource.asObservable();

  backlogItems: Map<number, BacklogItemModel>;

  private actionUrl: 'http://localhost:3000/';
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
   // return this.http.get(this.actionUrl + 'api/getAllBacklogitems', this.options).map((r: Response) => r.json());
    return this.http.get('http://localhost:3000/api/getAllBacklogitems', this.options).map((r: Response) => r.json());
  }

}
