import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { MoreBtnComponent } from './more-btn/more-btn.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlesMorePipe, ArticlesFilterPipe, ArticlesLocalPipe } from './news-list/news-list.pipes';

//modules
import { EditPageModule } from './edit-page/edit-page.module';

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
    NewsItemComponent,
    MoreBtnComponent,
    ArticlePageComponent,
    ArticlesMorePipe,
    ArticlesFilterPipe, 
    ArticlesLocalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EditPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
