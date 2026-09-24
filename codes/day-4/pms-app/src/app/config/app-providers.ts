import { Provider } from "@angular/core";
import { PRODUCT_SERVICE_TOKEN, PRODUCT_SERVICE_TYPE } from "./app-constants";

export const provideProductService = (): Provider => {
    return {
        provide: PRODUCT_SERVICE_TOKEN,
        useClass: PRODUCT_SERVICE_TYPE
    }
}