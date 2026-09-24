import { Component, effect, EffectCleanupRegisterFn, inject, signal, WritableSignal } from '@angular/core';
import { Todo } from '../../models/todo';
import { TODO_SERVICE_TOKEN } from '../../config/constants';
import { ServiceManager } from '../../services/todo-service';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router, RouterLink } from '@angular/router';
import { TodoStorageService } from '../../services/todo-storage-service';
//import { Observable } from 'rxjs';

@Component({
  //imports: [RouterLink],
  selector: 'app-todo-info',
  styleUrl: './todo-info.css',
  templateUrl: './todo-info.html',
})
export class TodoInfo {

  todo: WritableSignal<Todo | null> = signal<Todo | null>(null);
  isRequestOver = signal(false)
  errorInfo = signal('')
  private todoSvc: ServiceManager<Todo> = inject(TODO_SERVICE_TOKEN);
  private currentRoute = inject(ActivatedRoute)
  private router = inject(Router)
  private todoStoreSvc = inject(TodoStorageService)

  constructor() {
    effect(
      (cleanUp: EffectCleanupRegisterFn) => {
        this.getTodoData(cleanUp)
      }
    )
  }
  gotoEdit() {
    const t = this.todo()
    if (t !== null) {
      this.todoStoreSvc.save(t)
      this.router.navigate(['/todos/edit', t.id])
    }
    console.log(this.router);
  }

  private getTodoData(cleanUp?: EffectCleanupRegisterFn) {
    console.log('executing side effect causing code');
    //const paramsObs: Observable<Params> = this.currentRoute.params
    // paramsObs.subscribe({
    //   next: (params) => {
    //     const id = Number(params["id"])
    //   }
    //})

    const currentRouteSnapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const params = currentRouteSnapshot.params;
    //const params = currentRouteSnapshot.queryParams
    const id = Number(params["id"])

    const subscription = this.todoSvc
      .fetch(id)
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

    if (cleanUp) {
      cleanUp(() => {
        console.log('cleaning up subscription of prevous step');
        subscription.unsubscribe()
      })
    }
  }
}
