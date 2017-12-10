import {user} from "../users/user.model";

export class BackLogItem {
  public id: number;
  public betreff: string;
  public geloescht: boolean;
  public typ: string;
  public ersteller: user;
  public status: [string];
  public prioriät: [string]


}
