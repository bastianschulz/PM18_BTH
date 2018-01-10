import {Component, OnInit} from '@angular/core';
import {BurndownService} from "../../service/burndown.service";
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-burn-down-chart-item',
  templateUrl: './burn-down-chart-item.component.html',
  styleUrls: ['./burn-down-chart-item.component.css']
})
export class BurnDownChartItemComponent implements OnInit {

  constructor(private burndownservice: BurndownService) {

    this.loadEstHoMP();
    this.loadTimeEntries();

  }

  public groundLine: Array<any> = [];
  public timeEntries: Array<any> = [];


  ngOnInit() {
  }

  /**
   * Array für den Chart füllen
   */
  loadEstHoMP() {
    this.burndownservice.getEstHoMpbyPid().subscribe(
      data => {
        // befüllen des Arrays
        this.groundLine = [];
        data.forEach(ergebnis => {
          this.groundLine.push(ergebnis);
        });
      }
    );
  }

  loadTimeEntries() {
    this.burndownservice.getTimeEntries().subscribe(
      data => {
        // befüllen des Arrays
        this.timeEntries = [];
        data.forEach(ergebnis => {
          this.timeEntries.push(ergebnis);
        });
      }
    );
  }

  /**
   * Beispieldaten aus der HP
   *
   * TODO ZU ENTFERNEN!!!
   *
   *
   * @type {{data: number[]; label: string}[]}
   */

  lineChartData: Array<any> = [
    {data: [100,90,80,70,60,50,40,30,20,10,0], label: 'Ideal-Linie'},
    {data: [100,95,75,70,63,49,32,31,25,15,0], label: 'IST-Linie'},

  ];

  lineChartLabels: Array<any> = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Montag'];

  lineChartOptions: any = {
    responsive: true
  };

  lineChartColors: Array<any> = [
    /*{ // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'lightgreen',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }*/
  ];

  lineChartLegend: boolean = true;

  lineChartType: string = 'line';

  chartClicked(e: any): void {
    console.log(e);
  }

  public

  chartHovered(e: any): void {
    console.log(e);
  }


}
