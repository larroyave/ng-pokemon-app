import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from '../mock/mock-pokemon';

export class InMemoryDateService implements InMemoryDbService {
  createDb() {
    return { POKEMONS };
  }
}
