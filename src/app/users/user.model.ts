import {rolle} from "./rolle.model";

export class user {
  public ID: number;
  public benutzerName: string;
  public email: string;
  public rolle: rolle;
  public password: string;
  public geloescht: boolean;



  constructor(benutzerName: string, email: string, password: string){
    this.benutzerName = benutzerName;
    this.email = email;
    this.password = password;

  }
}
