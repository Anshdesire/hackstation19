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

  public canvasWidth = 300
  public needleValue = 741
  public centralLabel = ''
  public name = 'Credit Score'
  public bottomLabel = '741'
  public options = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(44, 151, 222)'],
      arcDelimiters: [30, 30],
      rangeLabel: ['0', '1000'],
      needleStartValue: 50,
  }
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  constructor(private _router: Router){}

  navigate(type: string) {
    this._router.navigate(['/'+type]);
  }

}
