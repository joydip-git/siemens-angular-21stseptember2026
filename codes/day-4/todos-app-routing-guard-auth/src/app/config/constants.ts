import { InjectionToken } from "@angular/core";
import { ServiceManager, TodoService } from "../services/todo-service";
import { Todo } from "../models/todo";

export const TODO_SERVICE_TOKEN = new InjectionToken<ServiceManager<Todo>>('TODO_SERVICE_TOKEN')
export const TODO_SERVICE_TYPE = TodoService
export const TODO_API_URL = 'https://jsonplaceholder.typicode.com/todos'