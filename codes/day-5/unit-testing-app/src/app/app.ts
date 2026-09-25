import { Component, effect, inject, signal } from '@angular/core';
import { TodoService } from './services/todo-service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Welcome to Unit Testing'
  todos = signal<Todo[]>([])
  todoSvc = inject(TodoService)

  constructor() {
    effect(
      () => {
        this.todos.set(this.todoSvc.getAll())
      }
    )
  }
}
