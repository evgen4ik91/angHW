import { Component, OnInit } from '@angular/core';
import { Fetcher } from '../fetcher';
import { NewsSourceService } from "../src-list/src-list.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  providers: [NewsSourceService]
})
export class NewsListComponent implements OnInit {
  private fetcher: any;
  public newsList: Array<string>;
  public newsListLength: number;
  public newsListToShow: Array<string>;
  public showedNewsCount = 0;
  public defaultShowedNewsCount = 5;
  public allNewsShowed = true;

  constructor(private srcService: NewsSourceService) {
    this.fetcher = new Fetcher('news');
  }

  moreBtnController() {
    if (this.showedNewsCount < this.newsListLength) {
      this.allNewsShowed = false;
    } else {
      this.showedNewsCount = this.newsListLength;
      this.allNewsShowed = true;
    }
    this.newsListToShow = this.newsList.slice(0, this.showedNewsCount);
  }

  resetNewsCount() {
    this.showedNewsCount = 0;
    this.allNewsShowed = true;
  }

  showMoreNews() {
    this.showedNewsCount += this.defaultShowedNewsCount;
    this.moreBtnController();
  }

  getNews(srcID) {
    this.resetNewsCount();
    this.fetcher.fetchData(srcID)
      .then(newsList => {
        this.newsList = newsList;
        this.newsListLength = newsList.length;
        this.showMoreNews();
      })
      .catch(() => console.log('Nothing to show'));
  }

  ngOnInit() {
    this.srcService.currentSource.subscribe(src => this.getNews(src.id));
  }

}
