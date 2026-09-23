import { Component, computed, effect, inject, signal } from '@angular/core';
import { ServiceManager } from '../../services/todo-service';
import { Todo } from '../../models/todo';
import { TODO_SERVICE_TOKEN } from '../../config/constants';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {
  private todoSvc: ServiceManager<Todo> = inject<ServiceManager<Todo>>(TODO_SERVICE_TOKEN)
  private subscription?: Subscription;

  // x = computed(() => {
  //   return this.isRequestOver
  // })

  todos = signal<Todo[]>([])
  isRequestOver = signal(false)
  errorInfo = signal('')

  constructor() {
    effect(() => this.getTodos())
  }

  getTodos() {
    const obs: Observable<Todo[]> = this.todoSvc
      .fetchAll();

    const todoObserver: Observer<Todo[]> = {
      next: (response) => {
        this.todos.set(response.slice(0, 10))
        console.log(this.todos);
        this.isRequestOver.set(true)
        this.errorInfo.set('')
      },
      error: (err) => {
        this.todos.set([])
        this.isRequestOver.set(true)
        this.errorInfo.set(err.message)
      },
      complete: () => { }
    }
    this.subscription = obs.subscribe(todoObserver)
  }
}
