import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nested } from './nested';

describe('Nested', () => {
  let component: Nested;
  let fixture: ComponentFixture<Nested>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nested],
    }).compileComponents();

    fixture = TestBed.createComponent(Nested);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
