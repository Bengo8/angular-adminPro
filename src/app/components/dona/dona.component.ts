import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import {  ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit, AfterViewInit {
  constructor() {}

  @Input() title: string = 'Sin titulo';
  @Input() labels: string[] = ['Sin información'];
  @Input() data: number[] = [-1];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: this.data }
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  public ngOnInit(): void {
    // let overrides: ChartOptions;
    // overrides = {
    //   scales: {
    //     x: [{
    //       ticks: { fontColor: 'white' },
    //       gridLines: { color: 'black' }
    //     }],
    //     y: [{
    //       ticks: { fontColor: 'white' },
    //       gridLines: { color: 'rgba(255,255,255,0.1)' }
    //     }]
    //   }
    // };
    // this._themeSrvc.setColorschemesOptions(overrides);
  }

  ngAfterViewInit(): void {
    this.doughnutChartData = {
      labels: this.labels,
      datasets: [
        { data: this.data }
      ],
    };
  }


  public chartClicked({event, active}: {event: ChartEvent; active: object[]}): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: {event: ChartEvent; active: object[]}): void {
    console.log(event, active);
  }
}
