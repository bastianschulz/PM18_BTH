import {Component, OnInit} from '@angular/core';
import {BurndownService} from "../../service/burndown.service";
import {ChartsModule} from 'ng2-charts';
import {MainService} from "../../service/main.service";
import {estHoMP} from "../../models/estHoMP.model";
import {BurnDownModel} from "../../models/burnDown.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-burn-down-chart-item',
  templateUrl: './burn-down-chart-item.component.html',
  styleUrls: ['./burn-down-chart-item.component.css']
})
export class BurnDownChartItemComponent implements OnInit {


  groundLine: estHoMP[] = [] as estHoMP[];
  timeEntries: BurnDownModel[] = [] as BurnDownModel[];

  constructor(private burndownservice: BurndownService, private mainService: MainService, private router:Router) {

  }


  ngOnInit() {
    this.mainService.authCheck();
    this.loadEstHoMP();
    //this.loadTimeEntries();

  }

  /**
   * Array für den Chart füllen
   */
  loadEstHoMP() {

    this.burndownservice.getEstHoMpbyPid().subscribe(
      data => {
        // befüllen des Arrays
        this.groundLine = [] as estHoMP[];
        data.forEach(ergebnis => {
          this.groundLine.push(ergebnis);

          this.fillLineChartDataGroundLine();

        });
      }
    );

  }

  /**
   *
   */
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
    {data: [], label: 'Ideal-Linie'},
    //{data: [100, 95, 75, 70, 63, 49, 32, 31, 25, 15, 0, 15, 0], label: 'IST-Linie'},

  ];

  fillLineChartDataGroundLine() {

    var base: number = this.groundLine[0].estHoMP;
    var x: Date = (this.groundLine[0].start);
    var y: Date = this.groundLine[0].end;

    var days: number = (this.dateDiff(y, x)) * (-1);
    var step: number = base / (days);

    var groundLineArray = [];

    for (let i = 0; i <= (days); i++) {
      var ttt: number = (base - (i * step));
      this.lineChartData[0].data.push(ttt);
    }

    this.lineChartData[0].data = groundLineArray;
  }

  dateDiff(date1, date2) {
    var dt1 = new Date(date1);
    var dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
  }




  lineChartLabels: Array<any> = ['0','1','2','3','4','1','2','3','4','1','2','3','4','1'];

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
