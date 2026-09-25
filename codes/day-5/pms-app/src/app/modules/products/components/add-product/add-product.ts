import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-add-product',
  styleUrl: './add-product.css',
  templateUrl: './add-product.html',
})
export class AddProduct {
  private router = inject(Router)

  submit() {
    if (window.confirm('add the data?')) {
      //send HTTP POST request with the product object to the backend

      //print success message
      window.alert('added succesfully')

      //redirect to /products
      this.router.navigate(['/products'])
    }
  }
}
