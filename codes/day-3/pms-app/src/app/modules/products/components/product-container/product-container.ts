import { Component, signal } from '@angular/core';
import { FilterProduct } from '../filter-product/filter-product';
import { ProductList } from '../product-list/product-list';

@Component({
  imports: [FilterProduct, ProductList],
  selector: 'app-product-container',
  styleUrl: './product-container.css',
  templateUrl: './product-container.html',
})
export class ProductContainer {
  filterText = signal('')
}
