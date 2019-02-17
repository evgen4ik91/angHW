import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsSourceService } from '../src-list/src-list.service';
import { NewsListService } from '../news-list/news-list.service';
import { HeaderTitleService } from '../header/header.service';

@Component({
  selector: 'app-local-news-selector',
  templateUrl: './local-news-selector.component.html',
  styleUrls: ['./local-news-selector.component.scss']
})
export class LocalNewsSelectorComponent implements OnInit {
  private checkboxEnabled: boolean;

  sourceSelectorDisabled: Subscription;

  constructor(private srcService: NewsSourceService) { }

  checkboxHandler($event) {
    let checkboxEnabled = $event.target.checked;
    this.srcService.disableSourceSelector(checkboxEnabled);
  }

  ngOnInit() {
    this.sourceSelectorDisabled = this.srcService.sourceSelectorDisabled.subscribe(state => this.checkboxEnabled = state);
  }
  ngOnDestroy() {
    this.sourceSelectorDisabled.unsubscribe();
  }

}
