import { Pipe, PipeTransform } from '@angular/core';
import { AstroTarget } from '../model/astro-target';

@Pipe({
  name: 'filterByCatalogue',
})
export class FilterByCataloguePipe implements PipeTransform {
  transform(targets: AstroTarget[], catalogue: string) {
    if (!Array.isArray(targets) || !catalogue) {
      return targets;
    } else {
      switch (catalogue) {
        case 'all':
          return targets;

        case 'messier':
          return targets.filter(
            (target) => target.catalogueNumber.slice(0, 1) === 'M'
          );

        case 'ngc':
          return targets.filter(
            (target) => target.catalogueNumber.slice(0, 1) === 'N'
          );
      }
    }
    return targets;
  }
}
