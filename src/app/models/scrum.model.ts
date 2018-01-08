/**
 * Created by Basti on 04.01.2018.
 */

export interface ScrumModel {
  uname: string;
  task_ID: number;
  titel: string;
  info: string;
  estHoMP: number;
  sprint_ID: number;
  backlog_ID: number;
  geloescht: boolean;
  status: string;
  erstelldatum: Date;
}
