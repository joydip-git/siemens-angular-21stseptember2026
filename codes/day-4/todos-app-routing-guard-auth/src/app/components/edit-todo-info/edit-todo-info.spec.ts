import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTodoInfo } from './edit-todo-info';

describe('EditTodoInfo', () => {
  let component: EditTodoInfo;
  let fixture: ComponentFixture<EditTodoInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTodoInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(EditTodoInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
