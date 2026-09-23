import { Component, computed, effect, EffectCleanupRegisterFn, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ServiceManager } from '../../services/todo-service';
import { Todo } from '../../models/todo';
import { TODO_SERVICE_TOKEN } from '../../config/constants';
import { Observable, Observer, Subscription } from 'rxjs';
import { TodoInfo } from '../todo-info/todo-info';

@Component({
  imports: [TodoInfo],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList implements OnInit, OnDestroy {
  private todoSvc: ServiceManager<Todo> = inject<ServiceManager<Todo>>(TODO_SERVICE_TOKEN)
  private subscription?: Subscription;

  // x = computed(() => {
  //   return this.isRequestOver
  // })

  todos = signal<Todo[]>([])
  isRequestOver = signal(false)
  errorInfo = signal('')
  //selectedTodo = signal<Todo | null>(null)
  selectedTodoId = signal(0)
  constructor() {
    //effect((cleanUp: EffectCleanupRegisterFn) => this.getTodos(cleanUp))
    console.log('TDL created');
  }

  ngOnInit(): void {
    this.getTodos()
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
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
    this.subscription = obs.subscribe(todoObserver)

    if (cleanUp) {
      cleanUp(
        () => this.subscription?.unsubscribe()
      )
    }
  }
}
