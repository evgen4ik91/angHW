import { Component, OnInit } from '@angular/core';
import { NewsSourceService } from "../src-list/src-list.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NewsSourceService]
})
export class HeaderComponent implements OnInit {

  srcTitle: string;

  constructor(private srcService: NewsSourceService) {}

  ngOnInit() {
    this.srcService.currentSource.subscribe(src => this.srcTitle = src.name);
  }

}