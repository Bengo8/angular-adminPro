import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  constructor() {}

  public chartLabels: string[] = ['Download Sales', 'yoquese', 'yoquese2'];
  public chartData: number[] = [10, 20, 300];
}
