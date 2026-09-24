import { Component, effect, EffectCleanupRegisterFn, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Product } from '../../models/product';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/app-constants';
import { ServiceContract } from '../../models/service-contract';
import { Subscription } from 'rxjs';
import { Spinner } from '../../../shared/components/spinner/spinner';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ProductFilterPipe, UpperCasePipe, CurrencyPipe, Spinner, RouterLink],
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

  constructor() {
    effect(
      (registerCleanUp) => { this.fetchProducts(registerCleanUp) })
  }

  private fetchProducts(registerCleanUp?: EffectCleanupRegisterFn) {
    const fetchSubscription = this.productSvcRef
      .getAll()
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.products.set(apiResponse.data)
            this.errorInfo.set('')
          } else {
            this.products.set([])
            this.errorInfo.set(apiResponse.message)
          }
          this.isRequestOver.set(true)
        },
        error: (err) => {
          this.products.set([])
          this.errorInfo.set(err.mesaage)
          this.isRequestOver.set(true)
        }

      })

    if (registerCleanUp) {
      registerCleanUp(
        () => fetchSubscription?.unsubscribe()
      )
    }
  }
  deleteProduct(id: number) {
    if (window.confirm('delete data?')) {
      //send an HTTP delete request to the backend with the id

      //success
      window.alert('deleted successfully')

      //re-load
      this.fetchProducts()
    }
  }
}
