import { ElementRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pkmtypecolor',
})
export class PokemonTypeColor implements PipeTransform {
  constructor(private el: ElementRef) {}

  transform(type: string): string {
    let classes: string;
    switch (type) {
      case 'Feu':
        classes = 'red';
        break;
      case 'Plante':
        classes = 'green';
        break;
      case 'Poison':
        classes = 'purple';
        break;
      case 'Eau':
        classes = 'blue';
        break;
      case 'Insecte':
        classes = 'light-green';
        break;
      case 'Vol':
        classes = 'light-blue';
        break;
      case 'Electrik':
        classes = 'yellow';
        break;
      case 'Fée':
        classes = 'pink';
        break;
      default:
        classes = 'light-grey';
        break;
    }
    return classes + ' chip ';
  }
}
