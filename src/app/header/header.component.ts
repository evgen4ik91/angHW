import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from './header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private title;

  headerSubscription: Subscription;

  constructor(private headerService: HeaderTitleService) {}

  ngOnInit() {
    this.headerSubscription = this.headerService.title.subscribe(title => this.title = title);
  }

}