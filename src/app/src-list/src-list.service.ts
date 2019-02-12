import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsSourceService {

  private newsSource = new BehaviorSubject({name: 'ABC news', id: 'abc-news'});
  currentSource = this.newsSource.asObservable();

  constructor() { }

  changeNewsSource(src: any) {
    this.newsSource.next(src);
  }

}