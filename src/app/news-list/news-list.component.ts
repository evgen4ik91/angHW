import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fetcher } from '../fetcher';
import { NewsSourceService } from '../src-list/src-list.service';
import { NewsListService } from './news-list.service';
import { FilterNewsService } from '../filter-news/filter-news.service';

import { ArticleInterface, SourceInterface } from '../interface';
import localNews from '../localNews';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  private fetcher: any;
  private shouldReload: boolean;
  private filterString: string;
  private showOnlyLocal: boolean;
  public newsList: Array<ArticleInterface>;
  public newsListLength: number;
  public showedNewsCount: number;
  public defaultShowedNewsCount = 3;
  public allNewsShowed = true;
  public currentSrcIndex: number;
  public sourceList: Array<SourceInterface>;
  
  srcIndexSubscription: Subscription;
  srcListSubscription: Subscription;
  srcListDisabledSubscription: Subscription;
  shouldReloadSubscription: Subscription;
  listSubscription: Subscription;
  countSubscription: Subscription;
  filterSubscription: Subscription;
  

  constructor(
      private srcService: NewsSourceService,
      private listService: NewsListService,
      private filterService: FilterNewsService
    ) {
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

  showMoreNews(all: boolean = false): void {
    this.listService.updateNewsCount(all ? this.newsListLength : this.showedNewsCount + this.defaultShowedNewsCount);
    this.moreBtnController();
  }

  resetNewsCount(): void {
    this.listService.updateNewsCount(0);
    this.allNewsShowed = true;
  }

  removeArticle(artIndex) {
    this.listService.updateNewsListSource(this.newsList.filter(article => article.id !== artIndex));
  }

  getNews(srcID: string): void {
    this.resetNewsCount();
    this.fetcher.fetchData(srcID)
      .then(newsList => {
        let updateWithID = [...localNews, ...newsList].map((article, i) => {
          let obj = article;
          obj.id = i + 1;
          return obj;
        });
        this.listService.updateNewsListSource(updateWithID);

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
      this.newsListLength = list.length + localNews.length;
    });
    this.countSubscription = this.listService.currentCount.subscribe(cnt => this.showedNewsCount = cnt);
    this.filterSubscription = this.filterService.filterString.subscribe(str => {
      this.filterString = str;
      if (this.filterString.length) this.showMoreNews(true);
    });
    this.srcListDisabledSubscription = this.srcService.sourceSelectorDisabled.subscribe(state => {
      this.showOnlyLocal = state;
      if (state) this.showMoreNews(true);
    });
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
    this.filterSubscription.unsubscribe();
  }

}
