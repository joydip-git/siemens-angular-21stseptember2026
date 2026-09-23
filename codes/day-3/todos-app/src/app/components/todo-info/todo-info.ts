import { Component, effect, EffectCleanupRegisterFn, inject, input, OnChanges, Signal, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { Todo } from '../../models/todo';
import { TODO_SERVICE_TOKEN } from '../../config/constants';
import { Subscription } from 'rxjs';
import { ServiceManager } from '../../services/todo-service';

@Component({
  imports: [],
  selector: 'app-todo-info',
  styleUrl: './todo-info.css',
  templateUrl: './todo-info.html',
})
export class TodoInfo //implements OnChanges,OnDestroy
{
  //todo = input<Todo | null>(null)
  selectedId = input(0)
  todo: WritableSignal<Todo | null>;
  isRequestOver = signal(false)
  errorInfo = signal('')

  private todoSvc: ServiceManager<Todo>;
  //private sub?: Subscription;

  constructor() {
    this.todo = signal<Todo | null>(null)
    this.todoSvc = inject(TODO_SERVICE_TOKEN)

    effect(
      //registering my side-effect causing code
      (cleanUp: EffectCleanupRegisterFn) => {
        this.getTodoData(cleanUp)        
      }
    )
  }

  // ngOnDestroy(): void {
  //   this.sub?.unsubscribe()
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.getTodoData()
  // }
  private getTodoData(cleanUp?: EffectCleanupRegisterFn) {
    console.log('executing side effect causing code');
    const subscription = this.todoSvc
      .fetch(this.selectedId())
      .subscribe({
        next: (response) => {
          this.todo.set(response)
          this.isRequestOver.set(true)
          this.errorInfo.set('')
        },
        error: (err) => {
          this.todo.set(null)
          this.isRequestOver.set(true)
          this.errorInfo.set(err.message)
        }
      })
    // subscription.unsubscribe()
    //registering my resource clean-up code
    if (cleanUp) {
      cleanUp(() => {
        console.log('cleaning up subscription of prevous step');
        subscription.unsubscribe()
      })
    }
  }
}
