import { Component, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-filter-product',
  styleUrl: './filter-product.css',
  templateUrl: './filter-product.html',
})
export class FilterProduct {
  filterText = signal('')
  filterTextChanged = output<string>()

  triggerFilterTextChanged(value: string) {
    this.filterText.set(value)
    this.filterTextChanged.emit(value)
  }
}
