import { Provider } from "@angular/core";
import { TODO_SERVICE_TOKEN, TODO_SERVICE_TYPE } from "./constants";

export const provideTodoServiceProvider = (): Provider => {
    return {
        provide: TODO_SERVICE_TOKEN,
        useClass: TODO_SERVICE_TYPE
    }
}