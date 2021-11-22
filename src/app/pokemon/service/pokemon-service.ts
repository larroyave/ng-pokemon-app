import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../modeles/pokemon';

@Injectable()
export class PokemonService {
  private pokemonsUrl = 'api/POKEMONS';
  constructor(private httpClient: HttpClient) {}

  getAllPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(this.pokemonsUrl);
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`${this.pokemonsUrl}/${id})`);
  }

  searchPokemon(name: string): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(`${this.pokemonsUrl}?name=${name}`);
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    let headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.httpClient.put<Pokemon>(this.pokemonsUrl, pokemon, { headers });
  }

  deletePokemon(id: number): Observable<Pokemon> {
    return this.httpClient.delete<Pokemon>(`${this.pokemonsUrl}/${id}`);
  }

  getPokemonTypes(): Array<string> {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy',
    ];
  }
}
