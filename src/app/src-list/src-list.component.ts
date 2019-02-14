import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fetcher } from '../fetcher';
import { NewsSourceService } from "./src-list.service";
import { FilterNewsService } from '../filter-news/filter-news.service';


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

  constructor(private srcService: NewsSourceService, private filterService: FilterNewsService) {
    this.fetcher = new Fetcher('src');
  }

  setCurrentSrc($event) {
    if ($event) this.filterService.updateNewsListSource('');
    this.srcService.setShouldReloadNews(true);
    this.srcService.changeNewsSource($event ? $event.target.selectedIndex : 0);
  }
  
  ngOnInit() {
    this.sourceListSubscription = this.srcService.sourceList.subscribe(list => this.srcList = list);
    this.sourceIndexSubscription = this.srcService.currentSource.subscribe(srcIndex => this.srcIndex = srcIndex);
    if (!this.srcList.length) {
      this.fetcher.fetchData().then(srcList => {
        this.srcService.setSourceList(srcList);
        this.setCurrentSrc(null);
      });
    }
  }
  ngOnDestroy() {
    this.sourceListSubscription.unsubscribe();
    this.sourceIndexSubscription.unsubscribe();
  }

}