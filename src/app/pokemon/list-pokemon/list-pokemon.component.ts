import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../modeles/pokemon';
import { PokemonService } from '../service/pokemon-service';

@Component({
  selector: 'app-root',
  templateUrl: 'list-pokemon.component.html',
  styleUrls: ['list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {
  constructor(private router: Router, private pokemonService: PokemonService) {}

  pokemons: Pokemon[];

  ngOnInit() {
    this.pokemonService.getAllPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }

  selectPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon/detail', pokemon.id]);
  }
}
