import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  typeParams: string[] = [];
  milkywayChecker: boolean = false;
  magnitudeRanges: string[] = [];
  searchString: string = '';

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

  nameUpdates(param: string) {
    this.searchString = param;
  }
}
