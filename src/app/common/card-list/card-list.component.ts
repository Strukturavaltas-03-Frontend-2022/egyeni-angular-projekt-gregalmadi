import { Component, OnInit, Input } from '@angular/core';
import { AstroTarget } from 'src/app/model/astro-target';

import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  astroTargets: AstroTarget[] = [];

  allPages: number = 0;
  currentPage: number = 1;
  pageIterator: Array<{ pageNum: number; clicked: boolean }> = [];
  sliceEnd: number = 20;

  @Input() typeParams: string[] = [];
  @Input() milkywayChecker: boolean = false;
  @Input() magnitudeRanges: string[] = [];
  @Input() searchString: string = '';

  constructor(private httpService: HttpService) {
    this.httpService.fetchTargets().subscribe((targets) => {
      this.astroTargets = [...targets];
      this.allPages = Math.ceil(this.astroTargets.length / 20);
      for (let i = 0; i < this.allPages; i++) {
        this.pageIterator[i] = { pageNum: i + 1, clicked: false };
      }
      this.pageIterator[0].clicked = true;
    });
  }

  ngOnInit(): void {}

  onDeleteCard(target: AstroTarget) {
    this.httpService.deleteTarget(target);
  }

  onEditCard(target: AstroTarget) {}

  // pagination -----------------------------------------

  onPageClick(page: { pageNum: number; clicked: boolean }) {
    this.currentPage = page.pageNum;
    this.sliceEnd = page.pageNum * 20;
    this.pageIterator.forEach((page) => (page.clicked = false));
    page.clicked = true;
  }

  onArrowClick(direction: string) {
    switch (direction) {
      case '-':
        if (this.currentPage > 1) {
          this.currentPage--;
          this.pageIterator.forEach((pages) => (pages.clicked = false));
          this.pageIterator[this.currentPage - 1].clicked = true;
          this.sliceEnd = this.currentPage * 20;
        }
        break;
      case '+':
        if (this.currentPage < this.allPages) {
          this.currentPage++;
          this.pageIterator.forEach((pages) => (pages.clicked = false));
          this.pageIterator[this.currentPage - 1].clicked = true;
          this.sliceEnd = this.currentPage * 20;
        }
        break;
    }
  }
}
