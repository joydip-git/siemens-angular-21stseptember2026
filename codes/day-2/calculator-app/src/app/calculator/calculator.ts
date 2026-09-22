import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculator',
  styleUrl: './calculator.css',
  templateUrl: './calculator.html',
})
export class Calculator {
  first: WritableSignal<number> = signal(0)
  second: WritableSignal<number> = signal(0)
  choice: WritableSignal<number> = signal(0)
  result: WritableSignal<number> = signal(0)
  stringResult: Signal<string> = computed(() => "Result is: " + (this.result() % 2 == 0 ? 'even' : 'odd'))

  // updateChoice(value: number) {
  //   this.choice.set(value)
  // }
  // updateFirst(value: number) {
  //   this.first.set(value)
  // }
  // updateSecond(value: number) {
  //   this.second.set(value)
  // }
  calculate() {
    switch (this.choice()) {
      case 1:
        this.result.set(this.first() + this.second())
        break;

      case 2:
        this.result.set(this.first() - this.second())
        break;

      case 3:
        this.result.set(this.first() * this.second())
        break;

      case 4:
        this.result.set(this.first() / this.second())
        break;

      default:
        this.result.set(0)
        break;
    }
  }
}
