import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListComponent } from './news-list/news-list.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { EditPageFormComponent } from './edit-page/edit-page-form/edit-page-form.component';

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: 'add', component: EditPageFormComponent},
  {path: 'edit/:id', component: EditPageFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }