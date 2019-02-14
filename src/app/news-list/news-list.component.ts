import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fetcher } from '../fetcher';
import { NewsSourceService } from '../src-list/src-list.service';
import { NewsListService } from './news-list.service';

import { ArticleInterface, SourceInterface } from '../interface';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  private fetcher: any;
  private shouldReload: boolean;
  public newsList: Array<ArticleInterface>;
  public newsListLength: number;
  public showedNewsCount: number;
  public defaultShowedNewsCount = 2;
  public allNewsShowed = true;
  public currentSrcIndex: number;
  public sourceList: Array<SourceInterface>;

  
  srcIndexSubscription: Subscription;
  srcListSubscription: Subscription;
  shouldReloadSubscription: Subscription;
  listSubscription: Subscription;
  countSubscription: Subscription;

  constructor(private srcService: NewsSourceService, private listService: NewsListService) {
    this.fetcher = new Fetcher('news');
  }

  moreBtnController() {
    if (this.showedNewsCount < this.newsListLength) {
      this.listService.updateNewsCount(this.showedNewsCount);
      this.allNewsShowed = false;
    } else {
      this.listService.updateNewsCount(this.newsListLength);
      this.allNewsShowed = true;
    }
  }

  resetNewsCount(): void {
    this.listService.updateNewsCount(0);
    this.allNewsShowed = true;
  }

  showMoreNews(): void {
    this.listService.updateNewsCount(this.showedNewsCount + this.defaultShowedNewsCount);
    this.moreBtnController();
  }

  getNews(srcID: string): void {
    this.resetNewsCount();
    this.fetcher.fetchData(srcID)
      .then(newsList => {
        this.listService.updateNewsListSource(newsList);
        this.showMoreNews();
        this.srcService.setShouldReloadNews(false);
      })
      .catch(() => console.log('Nothing to show'));
  }

  ngOnInit() {
    this.srcListSubscription = this.srcService.sourceList.subscribe(list => this.sourceList = list);
    this.shouldReloadSubscription = this.srcService.shouldReloadNews.subscribe(val => this.shouldReload = val);
    this.listSubscription = this.listService.currentList.subscribe(list => {
      this.newsList = list;
      this.newsListLength = list.length;
    });
    this.countSubscription = this.listService.currentCount.subscribe(cnt => this.showedNewsCount = cnt);
    
    this.srcIndexSubscription = this.srcService.currentSource.subscribe(srcIndex => {
      if (this.shouldReload) this.getNews(this.sourceList[srcIndex].id);
      else this.moreBtnController();
    });
  }
  ngOnDestroy() {
    this.srcIndexSubscription.unsubscribe();
    this.srcListSubscription.unsubscribe();
    this.shouldReloadSubscription.unsubscribe();
    this.listSubscription.unsubscribe();
    this.countSubscription.unsubscribe();
  }

}
