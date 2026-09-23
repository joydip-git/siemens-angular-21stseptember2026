import { InjectionToken } from "@angular/core";
import { ServiceContract } from "../modules/products/models/service-contract";
import { Product } from "../modules/products/models/product";
import { ProductService } from "../modules/products/services/product-service";

export const PRODUCT_SERVICE_TOKEN = new InjectionToken<ServiceContract<Product>>('PRODUCT_SERVICE_TOKEN')
export const PRODUCT_SERVICE_TYPE = ProductService

export const API_BASE_URL = 'http://localhost:3000'
export const PRODUCT_API_URL = `${API_BASE_URL}/products`
export const AUTH_API_URL = `${API_BASE_URL}/auth`