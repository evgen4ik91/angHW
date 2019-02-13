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
  public newsList: Array<ArticleInterface>;
  public newsListLength: number;
  public showedNewsCount = 0;
  public defaultShowedNewsCount = 5;
  public allNewsShowed = true;
  public currentSrcIndex: number;
  public sourceList: Array<SourceInterface>;

  
  srcIndexSubscription: Subscription;
  srcListSubscription: Subscription;
  listSubscription: Subscription;

  constructor(private srcService: NewsSourceService, private listService: NewsListService) {
    this.fetcher = new Fetcher('news');
  }

  moreBtnController() {
    if (this.showedNewsCount < this.newsListLength) {
      this.allNewsShowed = false;
    } else {
      this.showedNewsCount = this.newsListLength;
      this.allNewsShowed = true;
    }
  }

  resetNewsCount(): void {
    this.showedNewsCount = 0;
    this.allNewsShowed = true;
  }

  showMoreNews(): void {
    this.showedNewsCount += this.defaultShowedNewsCount;
    this.moreBtnController();
  }

  getNews(srcID: string): void {
    this.resetNewsCount();
    this.fetcher.fetchData(srcID)
      .then(newsList => {
        this.listService.updateNewsListSource(newsList);
        this.newsList = newsList;
        this.newsListLength = newsList.length;
        this.showMoreNews();
      })
      .catch(() => console.log('Nothing to show'));
  }

  ngOnInit() {
    this.srcListSubscription = this.srcService.sourceList.subscribe(list => this.sourceList = list);
    this.listSubscription = this.listService.currentList.subscribe(list => this.newsList = list);
    
    this.srcIndexSubscription = this.srcService.currentSource.subscribe(srcIndex => {
      if (this.sourceList.length) this.getNews(this.sourceList[srcIndex].id);
    });
  }
  ngOnDestroy() {
    this.srcIndexSubscription.unsubscribe();
    this.srcListSubscription.unsubscribe();
    this.listSubscription.unsubscribe();
  }

}
