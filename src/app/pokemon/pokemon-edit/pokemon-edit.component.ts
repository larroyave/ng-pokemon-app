import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../modeles/pokemon';
import { PokemonService } from '../service/pokemon-service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss'],
})
export class PokemonEditComponent implements OnInit {
  pokemon: Pokemon;
  constructor(
    private route: ActivatedRoute,
    private _pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this._pokemonService
      .getPokemon(parseInt(this.route.snapshot.paramMap.getAll('id')[0]))
      .subscribe((pokemon) => {
        this.pokemon = pokemon;
      });
  }
}
