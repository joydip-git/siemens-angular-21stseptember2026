import { Component, computed, effect, EventEmitter, signal } from '@angular/core';
import { people } from './data/people';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { PeopleSortPipe } from './pipes/people-sort-pipe';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, CurrencyPipe, PeopleSortPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  records = signal(people)
  sortchoice = signal<number>(0)

  constructor() {
    // effect(
    //   () => {
    //     switch (this.sortchoice()) {
    //       case 1:
    //         this.records().sort((p1, p2) => p1.id - p2.id)
    //         break;

    //       case 2:
    //         this.records().sort((p1, p2) => p1.name.localeCompare(p2.name))
    //         break;

    //       case 3:
    //         this.records().sort((p1, p2) => p1.salary - p2.salary)
    //         break;

    //       default:
    //         this.records().sort((p1, p2) => p1.id - p2.id)
    //         break;
    //     }
    //   }
    // )
  }

  updateChoice(e: Event) {
    const select = e.target as HTMLSelectElement;
    //select.selectedOptions
    const options = select.options;
    const selectedOption = options[select.selectedIndex]
    this.sortchoice.set(Number(selectedOption.value))
  }
}
