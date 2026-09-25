import { TestBed } from "@angular/core/testing";
import { TodoService } from "./todo-service";
describe("TodoService Tests",
    () => {

        let todoSvc: TodoService;

        beforeEach(
            () => {
                todoSvc = TestBed.inject(TodoService)
            }
        )


        it(
            "service object created",
            () => {
                expect(todoSvc).toBeDefined()
            }
        )

        it(
            "returns a todo object for a given id:1",
            () => {
                const actual = todoSvc.get(1)
                expect(actual).toBeDefined()
                expect(actual?.title).toBe('learn angular')
            }
        )
    }
)