import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../modeles/pokemon';
import { PokemonService } from '../service/pokemon-service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent implements OnInit {
  constructor(private _pokemonService: PokemonService) {}

  pokemonName: string;
  pokemons: Pokemon[];

  ngOnInit(): void {}

  search(): void {
    this._pokemonService
      .searchPokemon(this.pokemonName)
      .subscribe((datas) => (this.pokemons = datas));
  }
}
