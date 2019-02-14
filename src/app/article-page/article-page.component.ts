import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsListService } from "../news-list/news-list.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  public articleObj: any;
  private date: any;

  listSubscription: Subscription;

  constructor(private route: ActivatedRoute, private listService: NewsListService) { }

  ngOnInit() {
    this.listSubscription = this.listService.currentList.subscribe(list => {
      this.articleObj = list.find(article => article.id === parseInt(this.route.snapshot.params['id']));
      if (this.articleObj) this.date = new Date(this.articleObj.publishedAt);
      else console.log('article not found');
    });
  }
  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }

}