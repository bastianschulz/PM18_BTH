import {rolle} from "./rolle.model";

export interface UserModel {
  ID: number;
  benutzerName: string;
  email: string;
  rolle: rolle;
  password: string;
  geloescht: boolean;


/*
  constructor(benutzerName: string, email: string, password: string){
    this.benutzerName = benutzerName;
    this.email = email;
    this.password = password;

  }
  */
}
