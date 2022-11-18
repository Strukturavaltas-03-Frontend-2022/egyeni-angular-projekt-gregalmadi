import { Component, Input, OnInit } from '@angular/core';
import { AstroTarget } from 'src/app/model/astro-target';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent implements OnInit {
  @Input() target: AstroTarget = new AstroTarget();

  constructor() {}

  ngOnInit(): void {}

  onEditCard(target: AstroTarget) {}

  onDeleteCard(target: AstroTarget) {}
}
