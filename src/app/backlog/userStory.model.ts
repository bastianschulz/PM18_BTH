import {user} from "../users/user.model";

export class userStory {
  public ID: number;
  public betreff: string;
  public beschreibung: string;
  public ersteller: user;
  public geloescht: boolean;
}
