import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() article: any;
  @Input() articleIndex: number;

  public isLocal: boolean;
  public date: string;

  constructor() {
  }

  ngOnInit() {
    let date = new Date(this.article.publishedAt);
    this.date = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    this.isLocal = this.article.isLocal ? true : false;
  }

}
