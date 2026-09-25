import { inject, Service } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../products/models/api-response';
import { HttpClient } from '@angular/common/http';
import { AUTH_API_URL } from '../../../config/app-constants';

@Service()
export class AuthService {
    private _http = inject(HttpClient)

    register(user: User): Observable<ApiResponse<User>> {
        return this._http.post<ApiResponse<User>>(`${AUTH_API_URL}/register`, user)
    }
    login(user: User): Observable<ApiResponse<string>> {
        return this._http.post<ApiResponse<string>>(`${AUTH_API_URL}/login`, user)
    }
}
