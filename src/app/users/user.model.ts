import {rolle} from "./rolle.model";

export class user {
  public ID: number;
  public benutzerName: string;
  public email: string;
  public rolle: rolle;
  public password: string;
  public geloescht: boolean;

  public counter: number = 1;

  constructor(benutzerName: string, email: string, password: string){
    this.benutzerName = benutzerName;
    this.email = email;
    this.password = password;
    this.counter += 1;
  }
}
