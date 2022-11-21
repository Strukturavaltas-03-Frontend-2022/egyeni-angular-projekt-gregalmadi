import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';
import { AdminComponent } from './page/admin/admin.component';
import { CardListComponent } from './common/card-list/card-list.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { FiltersComponent } from './util/filters/filters.component';
import { FilterByTypePipe } from './pipes/filter-by-type.pipe';
import { FilterByMilkywayPipe } from './pipes/filter-by-milkyway.pipe';
import { FilterByMagnitudePipe } from './pipes/filter-by-magnitude.pipe';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { SingleCardComponent } from './common/single-card/single-card.component';
import { PaginationComponent } from './util/pagination/pagination.component';
import { PagingPipe } from './pipes/paging.pipe';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeComponent, ListComponent, AdminComponent, CardListComponent, DataEditorComponent, FiltersComponent, FilterByTypePipe, FilterByMilkywayPipe, FilterByMagnitudePipe, FilterByNamePipe, SingleCardComponent, PaginationComponent, PagingPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
