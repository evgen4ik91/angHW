import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  public articleID: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.articleID = this.route.snapshot.params['id'];
  }

}