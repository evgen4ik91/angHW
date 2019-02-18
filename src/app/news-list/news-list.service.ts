import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArticleInterface } from '../interface';

@Injectable({
    providedIn: 'root',
})
export class NewsListService {

  private newsListSource = new BehaviorSubject([]);
  currentList = this.newsListSource.asObservable();

  private newsCountSource = new BehaviorSubject(0);
  currentCount = this.newsCountSource.asObservable();

  private localNewsLengthSource = new BehaviorSubject(0);
  localNewsLength = this.localNewsLengthSource.asObservable();

  constructor(private http: HttpClient) { }

  updateNewsListSource(newsList: any) {
    this.newsListSource.next(newsList);
  }

  updateNewsCount(cnt: number) {
    this.newsCountSource.next(cnt);
  }

  updateLocalNewsCount(cnt: number) {
    this.localNewsLengthSource.next(cnt);
  }

  getLocalNews() {
    return this.http.get<ArticleInterface[]>('http://localhost:3000/news')
    .toPromise();
  }

  removeArticle(id: number) {
    return this.http.delete(`http://localhost:3000/news/${id}`)
    .toPromise();
  }

}