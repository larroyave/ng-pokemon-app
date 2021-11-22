import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(name: string, password: string) {
    let isLogged: boolean = name === 'admin' && password === 'admin';
    return of(true).pipe(
      delay(1000),
      tap(() => (this.isLoggedIn = isLogged))
    );
  }

  isLogged(): boolean {
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
