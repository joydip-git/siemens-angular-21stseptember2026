import { Component, effect, EffectCleanupRegisterFn, inject, signal } from '@angular/core';
import { ServiceManager } from '../../services/todo-service';
import { Todo } from '../../models/todo';
import { TODO_SERVICE_TOKEN } from '../../config/constants';
import { Observable, Observer } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {

  private router = inject(Router)
  private todoSvc: ServiceManager<Todo> = inject<ServiceManager<Todo>>(TODO_SERVICE_TOKEN)
  todos = signal<Todo[]>([])
  isRequestOver = signal(false)
  errorInfo = signal('')

  constructor() {
    effect((cleanUp: EffectCleanupRegisterFn) => this.getTodos(cleanUp))
  }

  getTodos(cleanUp?: EffectCleanupRegisterFn) {
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
    const subscription = obs.subscribe(todoObserver)

    if (cleanUp) {
      cleanUp(
        () => subscription.unsubscribe()
      )
    }
  }

  gotoInfo(selectedId: number) {
    // this.router.navigate(
    //   ['/todos', 'view'],
    //   {
    //     queryParams: {
    //       id: selectedId
    //     }
    //   })
    this.router.navigate(['/todos', 'view', selectedId])
  }
}
