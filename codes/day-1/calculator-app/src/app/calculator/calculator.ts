import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculator',
  styleUrl: './calculator.css',
  templateUrl: './calculator.html',
})
export class Calculator {
  first = 0
  second = 0
  choice = 0
  result = 0

  updateChoice(value: number) {
    this.choice = value
  }
  updateFirst(value: number) {
    this.first = value
  }
  updateSecond(value: number) {
    this.second = value
  }
  calculate() {
    switch (this.choice) {
      case 1:
        this.result = this.first + this.second
        break;

      case 2:
        this.result = this.first - this.second
        break;

      case 3:
        this.result = this.first * this.second
        break;

      case 4:
        this.result = this.first / this.second
        break;

      default:
        this.result = 0
        break;
    }
  }
}
