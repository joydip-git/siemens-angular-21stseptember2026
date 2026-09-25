import { Service, signal } from '@angular/core';

@Service()
export class TokenService {
    private _store = signal<string>('')

    get store() {
        return this._store
    }

    saveToken(token: string) {
        this._store.set(token)
    }
    removeToken() {
        this._store.set('')
    }
    isLoggedIn() {
        return this._store() !== ''
    }
}
