/**
 * Created by Basti on 11.12.2017.
 */

import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {UserModel} from '../models/user.model';

@Injectable()
export class UserService {

  /* Adresse abhängig von Umgebung wählen */
  private actionUrl: string = 'http://localhost:3000/api';
  //private actionUrl: string = 'http://10.60.67.166:3000/api';
  options: RequestOptions;

  userLogIn: boolean = false;


  constructor(private http: Http) {
    /**
     * Optionen für die Serveranfragen
     * @type {RequestOptions}
     */
    this.options = new RequestOptions({
      headers: new Headers({'Content-Type': 'application/json'}),
      withCredentials: true
    });
  }

  /*

   getAllUsers(): Observable<UserModel> {
   return this.http
   .get(this.actionUrl + '/user/getAllUsers', this.options)
   .map((r: Response) => r.json())
   //.catch(UserService.errorHandler);
   }
   */


  verifyUser(email: string, userPassword: string) {

    if (
      this.http.get(this.actionUrl + '/login?uname=' + email + '&passwd=' + userPassword, this.options).map((r: Response) => r.json())
      === null) {
      this.userLogIn = false;
    }
    else {
      this.userLogIn = true;
    }
    return;
  }


  /*
   public getSingle<T>(id: number): Observable<T> {
   return this.http.get<T>(this.actionUrl + id);
   }

   public add<T>(itemName: string): Observable<T> {
   const toAdd = JSON.stringify({ ItemName: itemName });

   return this.http.post<T>(this.actionUrl, toAdd);
   }

   public update<T>(id: number, itemToUpdate: any): Observable<T> {
   return this.http
   .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
   }

   public delete<T>(id: number): Observable<T> {
   return this.http.delete<T>(this.actionUrl + id);
   }
   */
}
