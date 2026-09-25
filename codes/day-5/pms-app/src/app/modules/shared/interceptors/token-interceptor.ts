import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../services/token-service";

export const TokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

    console.log('in interceptor');
    const tokenSvc = inject(TokenService)
    const token = tokenSvc.store()
    if (token) {
        const modifiedReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${token}`)
        })
        return next(modifiedReq)
    } else {
        return next(req)
    }
}