import { Observable } from "rxjs";
import { ApiResponse } from "./api-response";

export interface ServiceContract<T> {
    getAll(): Observable<ApiResponse<T[]>>;
    get(id: number): Observable<ApiResponse<T>>;
}