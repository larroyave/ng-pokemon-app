import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginInput: string;
  passwordInput: string;
  messageErreur: string;

  constructor(public authService: AuthService, private router: Router) {}

  setMessage() {
    this.messageErreur = this.authService.isLogged()
      ? ''
      : `Identifiant ou mot de passe incorrecte`;
  }

  login() {
    this.authService
      .login(this.loginInput, this.passwordInput)
      .subscribe(() => {
        this.setMessage();
        if (this.authService.isLogged()) {
          let url: string = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/pokemon/pokemons';
          this.router.navigate([url]);
        } else {
          this.passwordInput = '';
        }
      });
  }

  logout() {
    this.authService.logout();
  }
}
