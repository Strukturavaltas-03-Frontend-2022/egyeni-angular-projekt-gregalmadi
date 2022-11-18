import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AstroTarget } from 'src/app/model/astro-target';
import { astroTypes } from 'src/app/model/types';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  types = astroTypes;

  typeFilterArray: string[] = [];
  milkywayCheck: boolean = false;
  magnitudeRanges: string[] = [];
  searchKey: string = '';

  //@Input() astroTargets: AstroTarget[] = [];

  @Output() typeChange: EventEmitter<string[]> = new EventEmitter();
  @Output() milkywayChkbxChange: EventEmitter<boolean> = new EventEmitter();
  @Output() magnitudeRangeChange: EventEmitter<string[]> = new EventEmitter();
  @Output() keywordChange: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    /*this.types.forEach((type) => {
      this.astroTargets.forEach((target) => {
        target.type.includes(type.mainType) ? type.count++ : null;
      });
    });*/
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
