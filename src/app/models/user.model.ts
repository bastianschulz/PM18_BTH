import {rolle} from "./rolle.model";

export interface UserModel {
  ID: number;
  benutzerName: string;
  email: string;
  rolle: rolle;
  password: string;
  geloescht: boolean;
}
