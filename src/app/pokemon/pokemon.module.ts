import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCarDirective } from './directives/border-card.directive';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColor } from './pipes/pokemon-type-color.pipe';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { PokemonFormsComponent } from './pokemon-forms/pokemon-forms.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonService } from './service/pokemon-service';

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColor,
    BorderCarDirective,
    PokemonFormsComponent,
    PokemonEditComponent,
    PokemonSearchComponent,
  ],
  imports: [CommonModule, FormsModule, PokemonRoutingModule],
  providers: [PokemonService],
})
export class PokemonModule {}
