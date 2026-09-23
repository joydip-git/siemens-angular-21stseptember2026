import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoInfo } from './todo-info';

describe('TodoInfo', () => {
  let component: TodoInfo;
  let fixture: ComponentFixture<TodoInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
