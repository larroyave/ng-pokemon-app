import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';

const children: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'edit/:id', component: PokemonEditComponent },
  { path: 'detail/:id', component: DetailPokemonComponent },
];

const appRoutes: Routes = [
  { path: 'pokemon', children: children, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
