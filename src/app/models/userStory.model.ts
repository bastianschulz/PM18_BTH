import {UserModel} from "./user.model";

export class userStory {
  public ID: number;
  public betreff: string;
  public beschreibung: string;
  public ersteller: UserModel;
  public geloescht: boolean;
}
