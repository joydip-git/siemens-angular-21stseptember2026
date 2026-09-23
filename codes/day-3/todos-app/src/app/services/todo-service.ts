//import { Service } from '@angular/core';

import { inject } from "@angular/core";
import { Todo } from "../models/todo";
import { HttpClient } from "@angular/common/http";
import { TODO_API_URL } from "../config/constants";
import { Observable } from "rxjs";
//import { map, tap, filter } from "rxjs";

//@Service()
//registers the default, class-based service provider at the root of the app (app.config.ts file) where the token name is the class itself
//alternate @Injectable({providedIn:'root'})
//note: if you use either of the decorator you ARE NOT DOING custom token based provider registration

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
        // const obs: Observable<Object> = this.http.get(TODO_API_URL)
        // const res: Observable<Todo[]> = obs
        //     .pipe(
        //         map(
        //             (data: any) => {
        //                 return data.map(
        //                     (o: any): Todo => {
        //                         return {
        //                             id: o.id,
        //                             userId: o.userId,
        //                             title: o.title,
        //                             completed: o.completed
        //                         }
        //                     }
        //                 )
        //             }
        //         ),
        //         filter(
        //             (todo) => {
        //                 return todo.completed
        //             }
        //         ),
        //         tap({
        //             error: (err) => {
        //                 console.log(err.message);
        //             }
        //         })
        //     );
        // return res

        return this.http.get<Todo[]>(TODO_API_URL)
    }
}
