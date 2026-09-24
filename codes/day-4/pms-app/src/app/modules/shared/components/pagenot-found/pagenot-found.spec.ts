import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagenotFound } from './pagenot-found';

describe('PagenotFound', () => {
  let component: PagenotFound;
  let fixture: ComponentFixture<PagenotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagenotFound],
    }).compileComponents();

    fixture = TestBed.createComponent(PagenotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
