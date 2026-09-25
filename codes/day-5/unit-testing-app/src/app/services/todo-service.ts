import { Service } from "@angular/core";
import { Todo } from "../todo";

@Service()
export class TodoService {
    private todos: Todo[] = [
        {
            id: 1,
            userId: 1,
            title: 'learn angular',
            completed: true
        },
        {
            id: 2,
            userId: 1,
            title: 'learn react',
            completed: false
        }
    ]

    getAll() {
        return [...this.todos]
    }
    get(id: number) {
        return this.todos.find(td => td.id === id)
    }
}