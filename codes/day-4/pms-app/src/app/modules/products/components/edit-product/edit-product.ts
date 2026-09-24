import { Component, effect, inject, signal } from '@angular/core';
import { ProductStorageService } from '../../services/product-storage-service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-edit-product',
  styleUrl: './edit-product.css',
  templateUrl: './edit-product.html',
})
export class EditProduct {
  private storageSvc = inject(ProductStorageService)
  private router = inject(Router)

  productToEdit = signal<Product | undefined>(undefined)

  constructor() {
    effect(
      () => {
        const p = this.storageSvc.store()
        if (p) {
          this.productToEdit.set(p)
          console.log(p);
        }
      }
    )
  }
  submit() {
    if (window.confirm('update the data?')) {
      //send HTTP PUT request with the product object to the backend

      //print success message
      window.alert('updated succesfully')

      //redirect to /products
      this.router.navigate(['/products'])
    }
  }
}
