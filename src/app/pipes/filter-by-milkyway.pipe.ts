import { Pipe, PipeTransform } from '@angular/core';
import { AstroTarget } from '../model/astro-target';

@Pipe({
  name: 'filterByMilkyway',
})
export class FilterByMilkywayPipe implements PipeTransform {
  transform(targets: AstroTarget[], milkywayCheck: boolean) {
    if (!Array.isArray(targets) || !milkywayCheck) {
      return targets;
    } else return targets.filter((target) => target.isInMilkyWay === true);
  }
}
