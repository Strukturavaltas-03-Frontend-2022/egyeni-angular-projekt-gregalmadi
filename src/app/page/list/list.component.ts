import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  typeParams: string[] = [];
  milkywayChecker: boolean = false;
  magnitudeRanges: string[] = [];
  catalogue: string = '';
  searchString: string = '';

  sliceEnd: number = 20;
  showAll: boolean = true;

  milkywayBadge: string = environment.milkywayBadgeURL;

  constructor() {}

  ngOnInit() {}

  typeUpdates(params: string[]): void {
    this.typeParams = [...params];
  }

  milkywayChkbxUpdates(param: boolean): void {
    this.milkywayChecker = param;
  }

  magnitudeUpdates(params: string[]): void {
    this.magnitudeRanges = [...params];
  }

  catalogueUpdates(param: string): void {
    this.catalogue = param;
  }

  nameUpdates(param: string) {
    this.searchString = param;
  }

  onPageChange(page: number) {
    this.sliceEnd = page;
  }

  onToggleList(toggler: boolean) {
    this.showAll = toggler;
  }
}
