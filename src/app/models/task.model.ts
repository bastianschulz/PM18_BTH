

export interface TaskModel {
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
