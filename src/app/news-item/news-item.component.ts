import { Component, OnInit, Input } from '@angular/core';
import { ArticleInterface } from '../interface';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() article: ArticleInterface;
  @Input() articleIndex: number;

  public isLocal: boolean;
  public date: any;

  constructor() {
  }

  ngOnInit() {
    this.date = new Date(this.article.publishedAt);
    this.isLocal = this.article.isLocal ? true : false;
  }

}
