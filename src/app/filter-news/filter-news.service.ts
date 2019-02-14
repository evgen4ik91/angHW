import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FilterNewsService {

  private filterStringSource = new BehaviorSubject('');
  filterString = this.filterStringSource.asObservable();

  constructor() { }

  updateNewsListSource(str: string) {
    this.filterStringSource.next(str);
  }

}