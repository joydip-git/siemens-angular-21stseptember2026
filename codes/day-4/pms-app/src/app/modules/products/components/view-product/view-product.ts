import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/app-constants';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { Spinner } from '../../../shared/components/spinner/spinner';
import { ProductStorageService } from '../../services/product-storage-service';

@Component({
  imports: [Spinner],
  selector: 'app-view-product',
  styleUrl: './view-product.css',
  templateUrl: './view-product.html',
})
export class ViewProduct implements OnInit, OnDestroy {
  private router = inject(Router)
  private currentRoute = inject(ActivatedRoute)
  private ps = inject(PRODUCT_SERVICE_TOKEN)
  private subscription?: Subscription;
  private storageSvc = inject(ProductStorageService)

  isRequestOver = signal(false)
  errorInfo = signal('')
  product = signal<Product | undefined>(undefined)

  ngOnInit(): void {
    const id = Number(this.currentRoute.snapshot.params["id"])
    this.subscription = this.ps.get(id).subscribe({
      next: (apiResponse) => {
        if (apiResponse.data !== null) {
          this.product.set(apiResponse.data)
          this.errorInfo.set('')
        } else {
          this.product.set(undefined)
          this.errorInfo.set(apiResponse.message)
        }
        this.isRequestOver.set(true)
      },
      error: (err) => {
        this.isRequestOver.set(true)
        this.product.set(undefined)
        this.errorInfo.set(err.message)
      }
    })
  }

  goToEdit() {
    const p = this.product()
    if (p) {
      this.storageSvc.saveProduct(p)
      this.router.navigate(['/products/edit'], {
        queryParams: {
          id: Number(this.currentRoute.snapshot.params["id"])
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
