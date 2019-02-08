import { Component, OnInit } from '@angular/core';
import { Fetcher } from '../fetcher';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  private fetcher: any;
  public newsList: any;

  constructor() {
    this.fetcher = new Fetcher('news');
  }

  ngOnInit() {
    this.fetcher.fetchData('bbc-news').then(newsList => this.newsList = newsList);
  }

}
