import { Service, signal } from '@angular/core';
import { Product } from '../models/product';

@Service()
export class ProductStorageService {
    private _store = signal<Product | undefined>(undefined)

    get store() {
        return this._store
    }

    saveProduct(p: Product) {
        this._store.set(p)
    }
    removeProduct() {
        this._store.set(undefined)
    }
}
