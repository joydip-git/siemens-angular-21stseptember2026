import { Service, signal } from '@angular/core';

@Service()
export class TokenService {
    private _store = signal<string>('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3OTAyNTk3NjcsImV4cCI6MTc5MDI2MDk2N30.NSH-I5OL0X4URZAkVW0yJkR9uNtC8qB5lIJh-mfCj40')

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
