import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph',
  templateUrl: 'graph.page.html',
  styleUrls: ['graph.page.scss'],
})


export class GraphPage {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };


  public creditScore = Math.floor(Math.random() * (900 - 600) + 600);
  public debtsPercentage = Math.floor(Math.random() * (55 - 45 + 1)) + 45;  


  public canvasWidth = 379
  public needleValue = (this.creditScore / 900 ) * 100;
  public centralLabel = ''
  public name = 'Credit Score'
  public bottomLabel = `${this.creditScore}`;
  public options = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 900,
      arcColors: ['rgb(255,0,0)', 'green', 'rgb(44, 151, 222)'],
      arcDelimiters: [89],
      rangeLabel: ['0', '900'],
      needleStartValue: 50,
  }

  public barChartLabels: Label[] = ['Travel', 'Dinning', 'Shopping', 'Funds', 'Fuel'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [17, 23 , 20, 45, 15, 0, 100], label: '' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  constructor(private _router: Router){}

  navigate(type: string) {
    this._router.navigate(['/'+type]);
  }

}
