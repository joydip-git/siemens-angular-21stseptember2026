import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProduct } from './view-product';

describe('ViewProduct', () => {
  let component: ViewProduct;
  let fixture: ComponentFixture<ViewProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
