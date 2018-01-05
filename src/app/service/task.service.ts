/**
 * Created by Basti on 11.12.2017.
 */

import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { TaskModel } from '../models/task.model';
import { TaskTO } from '../models/task.TO';

@Injectable()
export class TaskService {

  // Observable sources
  private newTaskArraySource = new Subject<TaskModel[]>();
  private newTaskSource = new Subject<TaskModel>();

  // Observable streams
  newTaskArray$ = this.newTaskArraySource.asObservable();
  newTask$ = this.newTaskSource.asObservable();

  taskItems: Map<number, TaskModel>;


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
   * alle Tasks vom Server laden
   * @returns {Observable<TaskModel>} Daten vom Server
   */
  getAllTasks(): Observable<Array<TaskModel>> {
    return this.http
      .get(this.actionUrl+'/getAllTasks', this.options)
      .map((r: Response) => r.json());
  }

  /**
   * Task per task_ID vom Server laden
   * @returns {Observable<TaskModel>} Daten vom Server
   */
  getTaskByTaskID(task_ID: string): Observable<Array<TaskModel>> {
    return this.http
      .get(this.actionUrl+'/getTaskByTaskID?tid='+task_ID, this.options)
      .map((r: Response) => r.json());
  }

  /**
   * Task per task_ID updaten
   * @returns {Observable<TaskModel>} Daten vom Server
   */
  updTask(tid: number, tit: string, inf: string, est: number, sid: number, bliid: number, ge: boolean, stat: string, ed: Date): Observable<Array<TaskModel>> {
    return this.http
      .get(this.actionUrl+'/updTask?tid='+tid+'&tit='+tit+'&in='+inf+'&est='+est+'&sid='+sid+'&bliid='+bliid+'&ge='+ge+'&stat='+stat+'&ed='+ed, this.options)
      .map((r: Response) => r.json());
  }

  /**
   * Task anlegen
   * @param titel
   * @param info
   * @param estHoMP
   * @param erstelldatum
   * @returns {Observable<void>} ok oder != ok
   */
  postTask(titel: string, info: string, estHoMP: number, erstelldatum: Date) {
    const taskTO: TaskTO = ({
      titel: titel,
      info: info,
      estHoMP: (estHoMP as any),
      erstelldatum: erstelldatum
    }) as TaskTO;


    this.http.post(this.actionUrl+'/postTask', taskTO, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }
}
