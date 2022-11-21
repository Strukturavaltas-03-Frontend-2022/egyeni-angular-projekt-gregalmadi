import { Injectable } from '@angular/core';
import { AstroTarget } from '../model/astro-target';

@Injectable({
  providedIn: 'root',
})
export class RelayTargetsService {
  astroTargets: AstroTarget[] = [];

  constructor() {}

  setAstroTargetList(targets: AstroTarget[]) {
    this.astroTargets = targets;
  }

  getAstroTargetList(): AstroTarget[] {
    return this.astroTargets;
  }
}
