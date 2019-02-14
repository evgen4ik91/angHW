import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NewsListService {

  private newsListSource = new BehaviorSubject([]);
  currentList = this.newsListSource.asObservable();

  private newsCountSource = new BehaviorSubject(0);
  currentCount = this.newsCountSource.asObservable();

  constructor() { }

  updateNewsListSource(newsList: any) {
    this.newsListSource.next(newsList);
  }

  updateNewsCount(cnt: number) {
    this.newsCountSource.next(cnt);
  }

}