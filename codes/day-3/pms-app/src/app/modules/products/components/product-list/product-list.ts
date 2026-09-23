import { Component, effect, inject, input, signal } from '@angular/core';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Product } from '../../models/product';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/app-constants';
import { ServiceContract } from '../../models/service-contract';
import { Subscription } from 'rxjs';
import { Spinner } from '../../../shared/components/spinner/spinner';

@Component({
  imports: [ProductFilterPipe, UpperCasePipe, CurrencyPipe, Spinner],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  filterText = input('')
  products = signal<Product[]>([])
  isRequestOver = signal(false)
  errorInfo = signal('')
  private productSvcRef = inject<ServiceContract<Product>>(PRODUCT_SERVICE_TOKEN)
  private fetchSubscription?: Subscription;

  constructor() {
    effect(
      () => {
        this.fetchProducts()
      }
    )
  }

  private fetchProducts() {
    this.fetchSubscription = this.productSvcRef
      .getAll()
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.products.set(apiResponse.data)
            this.errorInfo.set('')
          } else {
            this.products.set([])
            this.errorInfo.set(apiResponse.mesaage)
          }
          this.isRequestOver.set(true)
        },
        error: (err) => {
          this.products.set([])
          this.errorInfo.set(err.mesaage)
          this.isRequestOver.set(true)
        }
      })
  }
}
