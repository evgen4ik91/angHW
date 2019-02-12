import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NewsListService {

  private newsListSource = new BehaviorSubject([]);
  currentList = this.newsListSource.asObservable();

  constructor() { }

  updateNewsListSource(newsList: any) {
    this.newsListSource.next(newsList);
  }

}