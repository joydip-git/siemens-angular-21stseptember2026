import { TestBed } from '@angular/core/testing';
import { ProductStorageService } from './product-storage-service';

describe('ProductStorageService', () => {
  let service: ProductStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
