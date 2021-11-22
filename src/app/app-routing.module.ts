import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultErrorRedirection } from './default-error-redirection/default-error-redirection.component';
import { PokemonRoutingModule } from './pokemon/pokemon-routing.module';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '**',
    component: DefaultErrorRedirection,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), PokemonRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
