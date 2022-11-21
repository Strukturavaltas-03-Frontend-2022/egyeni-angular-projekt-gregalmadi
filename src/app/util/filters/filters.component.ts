import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AstroTarget } from 'src/app/model/astro-target';

import { astroTypes } from 'src/app/model/types';
import { RelayTargetsService } from 'src/app/service/relay-targets.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  types = astroTypes;
  magnitudes = [0, 0, 0];

  typeFilterArray: string[] = [];
  milkywayCheck: boolean = false;
  magnitudeRanges: string[] = [];
  searchKey: string = '';

  astroTargets: AstroTarget[] = [];

  @Output() typeChange: EventEmitter<string[]> = new EventEmitter();
  @Output() milkywayChkbxChange: EventEmitter<boolean> = new EventEmitter();
  @Output() magnitudeRangeChange: EventEmitter<string[]> = new EventEmitter();
  @Output() keywordChange: EventEmitter<string> = new EventEmitter();

  constructor(private targetRelay: RelayTargetsService) {}

  ngOnInit(): void {
    this.astroTargets = this.targetRelay.getAstroTargetList();

    this.types.forEach((type) => {
      type.count = 0;
      this.astroTargets.forEach((target) => {
        target.type.includes(type.mainType) ? type.count++ : null;
      });
    });

    this.astroTargets.forEach((target) => {
      if (target.magnitude <= 6) this.magnitudes[0]++;
      if (target.magnitude > 6 && target.magnitude < 10) this.magnitudes[1]++;
      if (target.magnitude >= 10) this.magnitudes[2]++;
    });
  }

  onTypeChange(filterParam: string): void {
    if (this.typeFilterArray.includes(filterParam)) {
      this.typeFilterArray = this.typeFilterArray.filter(
        (el) => el !== filterParam
      );
    } else {
      this.typeFilterArray.push(filterParam);
    }

    this.typeChange.emit(this.typeFilterArray);
  }

  toggleMilkyway(): void {
    this.milkywayCheck = !this.milkywayCheck;

    this.milkywayChkbxChange.emit(this.milkywayCheck);
  }

  onMagnitudeRangeChange(filterParam: string): void {
    if (this.magnitudeRanges.includes(filterParam)) {
      this.magnitudeRanges = this.magnitudeRanges.filter(
        (el) => el !== filterParam
      );
    } else {
      this.magnitudeRanges.push(filterParam);
    }
    this.magnitudeRangeChange.emit(this.magnitudeRanges);
  }

  onTitleSearch(): void {
    this.keywordChange.emit(this.searchKey);
  }
}
