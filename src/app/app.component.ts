import { Component } from '@angular/core';
import { AstroTarget } from './model/astro-target';
import { HttpService } from './service/http.service';
import { RelayTargetsService } from './service/relay-targets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Astro Catalogue';

  astroTargets: AstroTarget[] = [];

  constructor(
    private httpService: HttpService,
    private targetRelay: RelayTargetsService
  ) {
    this.httpService.fetchTargets().subscribe((targets) => {
      this.astroTargets = [...targets];
      this.targetRelay.setAstroTargetList(this.astroTargets);
    });
  }
}
