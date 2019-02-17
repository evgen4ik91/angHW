import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fetcher } from '../fetcher';
import { NewsSourceService } from "./src-list.service";
import { FilterNewsService } from '../filter-news/filter-news.service';
import { HeaderTitleService } from '../header/header.service';


@Component({
  selector: 'app-src-list',
  templateUrl: './src-list.component.html',
  styleUrls: ['./src-list.component.scss']
})

export class SrcListComponent implements OnInit {
  private fetcher: any;
  public srcIndex: number;
  public srcList: any;
  public isDisabled: boolean = false;

  sourceListSubscription: Subscription;
  sourceIndexSubscription: Subscription;
  sourceSelectorDisabledSubscription: Subscription;

  constructor(
    private srcService: NewsSourceService,
    private filterService: FilterNewsService,
    private headerService: HeaderTitleService) {
    this.fetcher = new Fetcher('src');
  }

  setCurrentSrc($event) {
    let srcIndex = $event ? $event.target.selectedIndex : 0;
    if ($event) this.filterService.updateNewsListSource('');
    this.srcService.setShouldReloadNews(true);
    this.srcService.changeNewsSource(srcIndex);
    this.headerService.setTitle(this.srcList[this.srcIndex].name);
  }

  getSources() {
    this.fetcher.fetchData().then(srcList => {
      this.srcService.setSourceList(srcList);
      this.setCurrentSrc(null);
    });
  }
  
  ngOnInit() {
    this.sourceListSubscription = this.srcService.sourceList.subscribe(list => this.srcList = list);
    this.sourceIndexSubscription = this.srcService.currentSource.subscribe(srcIndex => this.srcIndex = srcIndex);
    this.sourceSelectorDisabledSubscription = this.srcService.sourceSelectorDisabled.subscribe(state => {
      this.isDisabled = state;
      if (this.srcList.length) this.headerService.setTitle(state ? 'Local News' : this.srcList[this.srcIndex].name);
    });
    if (!this.srcList.length) this.getSources();
  }
  ngOnDestroy() {
    this.sourceListSubscription.unsubscribe();
    this.sourceIndexSubscription.unsubscribe();
    this.sourceSelectorDisabledSubscription.unsubscribe();
  }

}