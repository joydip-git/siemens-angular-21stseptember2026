import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person';

@Pipe({
  name: 'peopleSort',
})
export class PeopleSortPipe implements PipeTransform {
  transform(value: Person[], ...args: number[]): Person[] {
    switch (args[0]) {
      case 1:
        value.sort((p1, p2) => p1.id - p2.id)
        break;

      case 2:
        value.sort((p1, p2) => p1.name.localeCompare(p2.name))
        break;

      case 3:
        value.sort((p1, p2) => p1.salary - p2.salary)
        break;

      default:
        value.sort((p1, p2) => p1.id - p2.id)
        break;
    }
    return value
  }
}
