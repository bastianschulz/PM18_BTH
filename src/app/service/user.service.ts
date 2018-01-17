/**
 * Created by Basti on 08.01.2017.
 */

import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import {UserModel} from '../models/user.model';
import {AsUserModel} from '../models/asuser.model';
import {UserTO} from '../models/user.TO';

@Injectable()
export class UserService {

  /* Adresse abhängig von Umgebung wählen */
  // public actionUrl: string = 'http://localhost:3000/api';
  private actionUrl: string = 'http://10.60.67.166:3000/api';
  options: RequestOptions;

  constructor(private http: Http) {
   // this.isUserLoggedIn = false;
    /**
     * Optionen für die Serveranfragen
     * @type {RequestOptions}
     */
    this.options = new RequestOptions({
      headers: new Headers({'Content-Type': 'application/json'}),
      withCredentials: false
    });
  }

  getAllUsers(): Observable<Array<UserModel>> {
    return this.http
      .get(this.actionUrl + '/getAllUsers', this.options)
      .map((r: Response) => r.json());
  }

  postUser(uname: string, email: string, passwd: string) {
    const userTO: UserTO = ({
      uname: uname,
      email: email,
      passwd: passwd
    }) as UserTO;

    this.http.post(this.actionUrl + '/postUser', userTO, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }

  updUser(uid: number, nam: string, eml: string, ge: number): Observable<void> {
    this.http
      .post(this.actionUrl + '/updUser?uid=' + uid + '&nam=' + nam + '&eml=' + eml + '&ge=' + ge, this.options)
      .map((r: Response) => r.json())
      .subscribe();
    return;
  }

  getAllUnasUsers(pid: number): Observable<Array<UserModel>> {
    return this.http
      .get(this.actionUrl + '/getUnasUsersByPid?pid='+pid, this.options)
      .map((r: Response) => r.json());
  }

  getProjectUsers(pid: number): Observable<Array<UserModel>> {
    return this.http
      .get(this.actionUrl + '/getProjectUsers?pid='+pid, this.options)
      .map((r: Response) => r.json());
  }

  getAllAsUsers(pid: number): Observable<Array<AsUserModel>> {
    return this.http
      .get(this.actionUrl + '/getAsUsersByPid?pid='+pid, this.options)
      .map((r: Response) => r.json());
  }
}
