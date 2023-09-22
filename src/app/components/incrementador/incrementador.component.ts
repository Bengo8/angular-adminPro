import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  constructor() {

  }
  @Input() progressValue: number = 0;
  @Input() btnClass: string  = 'btn btn-primary';
  @Output() progressValueChange: EventEmitter<number> = new EventEmitter();

  public changeProgressValue(value: number) {
    if ((value > 0 && this.progressValue < 100) || (value < 0 && this.progressValue > 0)) {
      this.progressValue = this.progressValue + value;
    }

    this.progressValueChange.emit(this.progressValue);
  }

  public incrementOnChange(newValue: number): void {
    if (newValue >= 100) {
      this.progressValue = 100;
    } else if (newValue <= 0) {
      this.progressValue = 0;
    } else {
      this.progressValue = newValue;
    }

    this.progressValueChange.emit(this.progressValue);
  }
}
