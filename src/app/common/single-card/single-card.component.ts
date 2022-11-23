import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AstroTarget } from 'src/app/model/astro-target';
import { HttpService } from 'src/app/service/http.service';
import { RelayTargetsService } from 'src/app/service/relay-targets.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent implements OnInit {
  @Input() target: AstroTarget = new AstroTarget();
  milkywayBadge = environment.milkywayBadgeURL;

  constructor(
    private httpService: HttpService,
    private targetRelay: RelayTargetsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onDeleteCard(target: AstroTarget) {
    this.httpService.deleteTarget(target).subscribe((target) => {
      this.httpService.fetchTargets().subscribe((targets) => {
        this.targetRelay.setAstroTargetList([...targets]);
        this.router.navigate(['/']).then(() => this.router.navigate(['/list']));
        console.log(`Target was successfully deleted: ${target}`);
      });
    });
  }
}
