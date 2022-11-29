import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';
import { AstroTarget } from 'src/app/model/astro-target';
import { RelayTargetsService } from 'src/app/service/relay-targets.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  astroTargets: AstroTarget[] = [];
  @ViewChild('chart') chart!: ChartComponent;
  typesChart: any;
  magnitudeChart: any;
  milkyWayChart: any;

  ngOnInit(): void {
    this.astroTargets = this.targetRelay.getAstroTargetList();

    this.astroTargets.forEach((target) => {
      this.typesChart.labels.forEach((label: string, i: number) => {
        if (target.type.includes(label)) {
          this.typesChart.series[i] += 1;
        }
      });
    });

    this.astroTargets.forEach((target) => {
      if (target.isInMilkyWay === true) {
        this.milkyWayChart.series[0] += 1;
      } else {
        this.milkyWayChart.series[1] += 1;
      }
    });

    this.astroTargets.forEach((target) => {
      if (target.magnitude <= 5) {
        this.magnitudeChart.series[0] += 1;
      } else if (target.magnitude > 5 && target.magnitude < 10) {
        this.magnitudeChart.series[1] += 1;
      } else {
        this.magnitudeChart.series[2] += 1;
      }
    });
  }

  constructor(private targetRelay: RelayTargetsService) {
    this.typesChart = {
      series: [0, 0, 0, 0, 0, 0],
      colors: [
        '#6c9dda',
        '#99516b',
        '#f5d17d',
        '#863934',
        '#494355',
        '#544741',
      ],
      labels: [
        'Galaxy',
        'Nebula',
        'Cluster',
        'Supernova Remnant',
        'Star Cloud',
        'Mixed',
      ],
      chart: {
        width: 500,
        type: 'pie',
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',

        labels: {
          colors: 'white',
        },
        markers: {
          fillColors: [
            '#6c9dda',
            '#99516b',
            '#f5d17d',
            '#863934',
            '#494355',
            '#544741',
          ],
        },
      },
      stroke: {
        colors: ['#FFFFFF40'],
        width: 3,
      },

      fill: {
        opacity: 1,
        type: 'image',

        image: {
          src: [
            'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/NGC4435.jpg?alt=media&token=ead47571-972e-4f8d-b5da-2e7d2cd56acc',
            'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/IC1805.jpg?alt=media&token=1d0265f5-b213-4eb5-8a9e-fea10196c944',
            'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/NGC884.jpg?alt=media&token=8f1288ec-9ce1-4def-b6c4-3391be705bb8',
            'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/M1.jpg?alt=media&token=561f6b03-d7af-4a0d-913c-accb8f6f18c0',
            'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/M24.jpg?alt=media&token=8bb15eae-ae18-40d5-a046-d874afebf69c',
            'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/NGC7320.jpg?alt=media&token=4b1724fd-a307-4c0c-b900-652d67716851',
          ],
        },
      },

      tooltip: {
        enabled: true,
        fillSeriesColor: true,
      },
    };

    this.milkyWayChart = {
      series: [0, 0],
      colors: ['#e7cfb7', '#333333'],
      labels: ['Inside Milky Way', 'Other worlds'],
      chart: {
        width: 500,
        type: 'pie',
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',

        labels: {
          colors: 'white',
        },
        markers: {
          fillColors: ['#e7cfb7', '#333333'],
        },
      },
      stroke: {
        colors: ['#FFFFFF40'],
        width: 3,
      },

      fill: {
        opacity: 1,
        type: 'image',

        image: {
          src: [
            'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/M66.jpg?alt=media&token=bd3683cc-0f91-4762-9a65-e618aed934f3',
            'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/virgocluster.jpg?alt=media&token=bce4c295-eff5-4671-9388-ddb2d3e5e4ec',
          ],
        },
      },
    };

    this.magnitudeChart = {
      series: [0, 0, 0],
      colors: ['#cccccc', '#777777', '#333333'],
      labels: ['Brighter than 6m', '6-10m', 'Fainter than 10m'],
      chart: {
        width: 500,
        type: 'pie',
      },

      legend: {
        position: 'bottom',
        horizontalAlign: 'center',

        labels: {
          colors: 'white',
        },
        markers: {
          fillColors: ['#cccccc', '#777777', '#333333'],
        },
      },
      stroke: {
        colors: ['#FFFFFF40'],
        width: 3,
      },

      fill: {
        opacity: 1,
        type: 'image',

        image: {
          src: [
            'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/knight.jpg?alt=media&token=5445ae17-6c12-4588-8d83-a0970bdd604d',
            'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/knight2.jpg?alt=media&token=d0157cd7-88fe-4734-b5db-afd7c2d8d005',
            'https://firebasestorage.googleapis.com/v0/b/astro-catalogue.appspot.com/o/knight3.jpg?alt=media&token=fa08223e-0b5b-47a7-8674-ba608ab59f38',
          ],
        },
      },
    };
  }
}
