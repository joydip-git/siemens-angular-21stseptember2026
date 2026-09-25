import { inject } from '@angular/core';
import { ServiceContract } from '../models/service-contract';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { HttpClient } from '@angular/common/http';
import { PRODUCT_API_URL } from '../../../config/app-constants';

export class ProductService implements ServiceContract<Product> {
    private _http = inject(HttpClient)

    get(id: number): Observable<ApiResponse<Product>> {
        return this._http.get<ApiResponse<Product>>(`${PRODUCT_API_URL}/${id}`)
    }
    getAll(): Observable<ApiResponse<Product[]>> {
        return this._http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
    }
}
