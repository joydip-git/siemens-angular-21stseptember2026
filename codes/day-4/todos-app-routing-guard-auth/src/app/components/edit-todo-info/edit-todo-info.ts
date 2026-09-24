import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoStorageService } from '../../services/todo-storage-service';
import { Todo } from '../../models/todo';

@Component({
  imports: [],
  selector: 'app-edit-todo-info',
  styleUrl: './edit-todo-info.css',
  templateUrl: './edit-todo-info.html',
})
export class EditTodoInfo implements OnInit {
  private todoStoreSvc = inject(TodoStorageService)
  protected todo = signal<Todo | null>(null)

  ngOnInit(): void {
    const savedTodo = this.todoStoreSvc.store()
    if (savedTodo != null) {
      this.todo.set(savedTodo)
    }
  }

}
