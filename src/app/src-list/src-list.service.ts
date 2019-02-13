import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsSourceService {

  private newsSource = new BehaviorSubject(0);
  currentSource = this.newsSource.asObservable();

  private sourceListSource = new BehaviorSubject([]);
  sourceList = this.sourceListSource.asObservable();

  constructor() { }

  changeNewsSource(srcIndex: number) {
    this.newsSource.next(srcIndex);
  }

  setSourceList(list: Array<string>) {
    this.sourceListSource.next(list);
  }

}