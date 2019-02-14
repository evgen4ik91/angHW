import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FilterNewsService } from './filter-news.service';

@Component({
  selector: 'app-filter-news',
  templateUrl: './filter-news.component.html',
  styleUrls: ['./filter-news.component.scss']
})
export class FilterNewsComponent implements OnInit {

  public filterString: string;
  filterStringSubscribe: Subscription;

  constructor(private filterService: FilterNewsService) { }

  updateFilterString($event) {
    let inpEl = $event.target;
    this.filterService.updateNewsListSource(inpEl.value);
  }

  ngOnInit() {
    this.filterStringSubscribe = this.filterService.filterString.subscribe(str => this.filterString = str);
  }

  ngOnDestroy() {
    this.filterStringSubscribe.unsubscribe();
  }

}
