import { Pipe, PipeTransform } from '@angular/core';
import { AstroTarget } from '../model/astro-target';

@Pipe({
  name: 'filterByMagnitude',
})
export class FilterByMagnitudePipe implements PipeTransform {
  transform(targets: AstroTarget[], filterParams: string[]) {
    if (!Array.isArray(targets) || !filterParams) {
      return targets;
    }
    if (filterParams.length === 1) {
      if (filterParams.includes('bright')) {
        return targets.filter((target) => target.magnitude <= 6);
      }
      if (filterParams.includes('medium')) {
        return targets.filter(
          (target) => target.magnitude > 6 && target.magnitude < 10
        );
      }
      if (filterParams.includes('dim')) {
        return targets.filter((target) => target.magnitude >= 10);
      }
    }
    if (filterParams.length >= 2) {
      return targets;
    } else {
      return targets;
    }
  }
}
