import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../modeles/pokemon';
import { PokemonService } from '../service/pokemon-service';

@Component({
  selector: 'detail-pokemon',
  templateUrl: 'detail-pokemon.component.html',
  styleUrls: ['detail-pokemon.component.scss'],
})
export class DetailPokemonComponent implements OnInit {
  pokemons: Pokemon[];
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this._pokemonService
      .getPokemon(parseInt(this.route.snapshot.paramMap.getAll('id')[0]))
      .subscribe((pokemon) => {
        this.pokemon = pokemon;
      });
  }

  goBack() {
    this.router.navigate(['/pokemon/pokemons']);
  }

  goEdit() {
    this.router.navigate(['pokemon/edit', this.pokemon.id]);
  }

  goDelete() {
    this._pokemonService
      .deletePokemon(this.pokemon.id)
      .subscribe(() => this.goBack());
  }
}
