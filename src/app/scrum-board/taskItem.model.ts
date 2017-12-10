import {user} from "../users/user.model";

export class taskItem {
  public ID: number;
  public betreff: string;
  public detail: string;
  public geloescht: boolean;
  public status: [string];
  public zugewiesen: user;
  public erstellDatum: Date;
  public ArbeitsstundenSOLL: number;
}
