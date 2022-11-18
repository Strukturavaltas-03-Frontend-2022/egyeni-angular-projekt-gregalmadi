import { Pipe, PipeTransform } from '@angular/core';
import { AstroTarget } from '../model/astro-target';

@Pipe({
  name: 'filterByType',
})
export class FilterByTypePipe implements PipeTransform {
  transform(targets: AstroTarget[], filterParams: string[]) {
    if (!Array.isArray(targets) || !filterParams || filterParams.length === 0) {
      return targets;
    } else
      return targets.filter((target) =>
        filterParams.some((id) => target.type.includes(id))
      );
  }
}
