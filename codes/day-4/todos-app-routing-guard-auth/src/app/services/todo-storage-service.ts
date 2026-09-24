import { Injectable, Service, signal } from "@angular/core";
import { Todo } from "../models/todo";

@Service()
//@Injectable({ providedIn: 'root' })
export class TodoStorageService {
    private readonly _store = signal<Todo | null>(null)

    save(todo: Todo) {
        this._store.set(todo)
    }

    get store() {
        return this._store
    }
}