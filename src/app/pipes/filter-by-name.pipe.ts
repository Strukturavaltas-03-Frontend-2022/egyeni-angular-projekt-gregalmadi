import { Pipe, PipeTransform } from '@angular/core';
import { AstroTarget } from '../model/astro-target';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(targets: AstroTarget[], searchString: string) {
    if (!Array.isArray(targets) || !searchString) {
      return targets;
    } else {
      return targets.filter((target) =>
        target.name.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  }
}
