import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../modeles/pokemon';
import { PokemonService } from '../service/pokemon-service';

@Component({
  selector: 'app-pokemon-forms',
  templateUrl: './pokemon-forms.component.html',
  styleUrls: ['./pokemon-forms.component.scss'],
})
export class PokemonFormsComponent implements OnInit {
  types: string[];

  @Input() pokemon: Pokemon;

  constructor(
    private router: Router,
    private _pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.types = this._pokemonService.getPokemonTypes();
  }

  // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.

  hasType(type: string): boolean {
    let index = this.pokemon.types.indexOf(type);

    if (index > -1) return true;

    return false;
  }

  // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.

  selectType($event: any, type: string): void {
    let checked = $event.target.checked;

    if (checked) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);

      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  // Valide le nombre de types pour chaque pokémon

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    this._pokemonService.updatePokemon(this.pokemon).subscribe(() => {
      this.router.navigate([`/pokemon/detail/${this.pokemon.id}`]);
    });
  }
}
