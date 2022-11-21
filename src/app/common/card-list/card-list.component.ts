import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AstroTarget } from 'src/app/model/astro-target';
import { RelayTargetsService } from 'src/app/service/relay-targets.service';

import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  astroTargets: AstroTarget[] = [];

  @Input() sliceEnd: number = 20;
  @Input() showAll: boolean = true;

  @Input() typeParams: string[] = [];
  @Input() milkywayChecker: boolean = false;
  @Input() magnitudeRanges: string[] = [];
  @Input() searchString: string = '';

  constructor(private targetRelay: RelayTargetsService) {
    this.astroTargets = this.targetRelay.getAstroTargetList();
  }

  ngOnInit(): void {}
}
