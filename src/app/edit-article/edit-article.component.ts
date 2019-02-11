import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  public articleID: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.snapshot.params['id'];
  }

}
