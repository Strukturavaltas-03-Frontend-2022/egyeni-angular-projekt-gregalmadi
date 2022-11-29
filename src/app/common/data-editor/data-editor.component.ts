import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AstroTarget } from 'src/app/model/astro-target';
import { subTypes } from 'src/app/model/astroSubTypes';
import { constellations } from 'src/app/model/constellations';
import { HttpService } from 'src/app/service/http.service';
import { RelayTargetsService } from 'src/app/service/relay-targets.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  target: AstroTarget = new AstroTarget();
  astroTargets: AstroTarget[] = [];

  constellations = constellations;
  astroTypes = subTypes;
  steps: number[] = [0, 5, 10, 15, 20];

  milkywayBadge: string = environment.milkywayBadgeURL;

  imgURLRegExp = new RegExp(
    '^' +
      'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/',
    'i'
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private targetRelay: RelayTargetsService,
    private httpService: HttpService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'] === '0') {
        this.target = new AstroTarget();
      } else {
        this.target = {
          ...this.targetRelay
            .getAstroTargetList()
            .filter((target) => target.id === Number(params['id']))[0],
        };
      }
    });

    this.astroTargets = this.targetRelay.getAstroTargetList();
  }

  onUpdate(target: AstroTarget): void {
    // new target request
    if (target.uniqueId === '') {
      target.id = this.astroTargets.length + 1;
      const newTargetName = target.name;

      this.httpService.addTarget(target).subscribe(() => {
        this.httpService.fetchTargets().subscribe((targets) => {
          this.targetRelay.setAstroTargetList([...targets]);

          this.toastr.success(
            `${newTargetName} was successfully added!`,
            'CREATE',
            { timeOut: 4000, positionClass: 'toast-top-right' }
          );

          this.router.navigate(['/list']);
        });
      });
    }
    // edit ttarget request
    else {
      const editedTargetName = target.name;
      this.httpService.updateTarget(target).subscribe(() => {
        this.httpService.fetchTargets().subscribe((targets) => {
          this.targetRelay.setAstroTargetList([...targets]);
          this.toastr.info(
            `${editedTargetName} was successfully updated!`,
            'UPDATE',
            { timeOut: 4000, positionClass: 'toast-top-right' }
          );

          this.router.navigate(['/list']);
        });
      });
    }
  }
}
