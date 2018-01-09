/**
 * Created by Basti on 11.12.2017.
 */

import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {UserModel} from '../models/user.model';
import {PRLModel} from '../models/prl.model';

import {ProjectService} from '../service/project.service';
import {Router} from '@angular/router';


@Injectable()
export class MainService {

  /* Adresse abhängig von Umgebung wählen */
  //public actionUrl: string = 'http://localhost:3000/api';
  private actionUrl: string = 'http://10.60.67.166:3000/api';
  options: RequestOptions;

  authenticated = false;

  UserID: number;
  Username: string;
  PRL: PRLModel[] = [] as PRLModel[];

  scrum = false;
  user = false;
  stake = false;

  constructor(private http: Http, private projectS:ProjectService, private router: Router) {
    /**
     * Optionen für die Serveranfragen
     * @type {RequestOptions}
     */
    this.options = new RequestOptions({
      headers: new Headers({'Content-Type': 'application/json'}),
      withCredentials: false
    });
  }

  authCheck(){
    if (this.authenticated==false){
      this.router.navigateByUrl('/');
    }
  }

  logout(){
    this.UserID = null;
    this.Username = null;
    this.PRL = null;
    this.authenticated = false;
    this.router.navigateByUrl('/');
  }

  getAllUsers(): Observable<Array<UserModel>> {
    return this.http
      .get(this.actionUrl+'/getAllUsersFL', this.options)
      .map((r: Response) => r.json());
  }

  loadPRL() {
    this.projectS.getPRL(this.UserID).subscribe(
      data => {
        // befüllen des Arrays
        this.PRL = [] as PRLModel[];
        data.forEach(ergebnis => {
          this.PRL.push(ergebnis);
        });
      }
    );
  }

}
