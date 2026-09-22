import { Component, input, signal } from '@angular/core';
import { products } from '../../repository/products';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  imports: [ProductFilterPipe, UpperCasePipe, CurrencyPipe],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  filterText = input('')
  products = signal(products)
}
