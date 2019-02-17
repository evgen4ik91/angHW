import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HeaderTitleService {

  private titleSource = new BehaviorSubject([]);
  title = this.titleSource.asObservable();

  constructor() { }

  setTitle(str) {
    this.titleSource.next(str);
  }

}