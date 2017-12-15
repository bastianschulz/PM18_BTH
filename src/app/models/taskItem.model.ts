import {UserModel} from "./user.model";

export interface taskItem {
  ID: number;
  betreff: string;
  detail: string;
  geloescht: boolean;
  status: [string];
  zugewiesen: UserModel;
  erstellDatum: Date;
  ArbeitsstundenSOLL: number;
}
