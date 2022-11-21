import { Pipe, PipeTransform } from '@angular/core';
import { AstroTarget } from '../model/astro-target';

@Pipe({
  name: 'paging',
})
export class PagingPipe implements PipeTransform {
  transform(
    targets: AstroTarget[],
    showAll: boolean = true,
    start: number,
    end: number
  ) {
    if (!Array.isArray(targets) || showAll === true) return targets;
    else {
      return targets.slice(start, end);
    }
  }
}
