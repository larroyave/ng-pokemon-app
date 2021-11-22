import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultErrorRedirection } from './default-error-redirection/default-error-redirection.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginRoutingModule } from './login/login-routing.modules';
import { LoginComponent } from './login/login/login.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { InMemoryDateService } from './pokemon/service/in-memory-data-service';

@NgModule({
  declarations: [AppComponent, DefaultErrorRedirection, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDateService, {
      dataEncapsulation: false,
    }),
    PokemonModule,
    LoginRoutingModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
