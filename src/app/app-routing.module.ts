import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListComponent } from './news-list/news-list.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: 'add', component: EditArticleComponent},
  {path: 'edit/:id', component: EditArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }