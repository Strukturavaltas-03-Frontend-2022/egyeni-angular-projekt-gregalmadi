import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AstroTarget } from 'src/app/model/astro-target';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  astroTargets: AstroTarget[] = [];

  allPages: number = 0;
  currentPage: number = 1;
  pageIterator: Array<{ pageNum: number; clicked: boolean }> = [];
  sliceEnd: number = 20;

  showAll: boolean = true;

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

  @Output() paging: EventEmitter<number> = new EventEmitter();
  @Output() toggleAll: EventEmitter<boolean> = new EventEmitter();

  toggleShowAll(): void {
    this.showAll = !this.showAll;
    this.toggleAll.emit(this.showAll);
  }

  onPageClick(page: { pageNum: number; clicked: boolean }) {
    this.currentPage = page.pageNum;
    this.sliceEnd = page.pageNum * 20;
    this.pageIterator.forEach((page) => (page.clicked = false));
    page.clicked = true;
    this.paging.emit(this.sliceEnd);
  }

  onArrowClick(direction: string) {
    switch (direction) {
      case '-':
        if (this.currentPage > 1) {
          this.currentPage--;
          this.pageIterator.forEach((pages) => (pages.clicked = false));
          this.pageIterator[this.currentPage - 1].clicked = true;
          this.sliceEnd = this.currentPage * 20;
          this.paging.emit(this.sliceEnd);
        }
        break;
      case '+':
        if (this.currentPage < this.allPages) {
          this.currentPage++;
          this.pageIterator.forEach((pages) => (pages.clicked = false));
          this.pageIterator[this.currentPage - 1].clicked = true;
          this.sliceEnd = this.currentPage * 20;
          this.paging.emit(this.sliceEnd);
        }
        break;
    }
  }
}
