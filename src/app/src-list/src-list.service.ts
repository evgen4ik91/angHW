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

  private shouldReloadNewsSource = new BehaviorSubject(false);
  shouldReloadNews = this.shouldReloadNewsSource.asObservable();

  private disableSourceSelectorSource = new BehaviorSubject(false);
  sourceSelectorDisabled = this.disableSourceSelectorSource.asObservable();

  constructor() { }

  changeNewsSource(srcIndex: number) {
    this.newsSource.next(srcIndex);
  }

  setSourceList(list: Array<string>) {
    this.sourceListSource.next(list);
  }

  setShouldReloadNews(val: boolean) {
    this.shouldReloadNewsSource.next(val);
  }

  disableSourceSelector(val: boolean) {
    this.disableSourceSelectorSource.next(val);
  }

}