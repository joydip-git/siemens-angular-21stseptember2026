import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductContainer } from './product-container';

describe('ProductContainer', () => {
  let component: ProductContainer;
  let fixture: ComponentFixture<ProductContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
