import { inject } from "@angular/core";
import { Todo } from "../models/todo";
import { HttpClient } from "@angular/common/http";
import { TODO_API_URL } from "../config/constants";
import { Observable } from "rxjs";

export interface ServiceManager<T> {
    fetchAll(): Observable<T[]>;
    fetch(id: number): Observable<T>;
}

export class TodoService implements ServiceManager<Todo> {

    private http = inject(HttpClient)

    fetch(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${TODO_API_URL}/${id}`)
    }

    fetchAll() {
        return this.http.get<Todo[]>(TODO_API_URL)
    }
}
