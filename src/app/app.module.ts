import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { NewsListComponent } from './news-list/news-list.component';
import { FooterComponent } from './footer/footer.component';
import { SrcListComponent } from './src-list/src-list.component';
import { FilterNewsComponent } from './filter-news/filter-news.component';
import { LocalNewsSelectorComponent } from './local-news-selector/local-news-selector.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { NewsItemComponent } from './news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    NewsListComponent,
    FooterComponent,
    SrcListComponent,
    FilterNewsComponent,
    LocalNewsSelectorComponent,
    AddArticleComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
