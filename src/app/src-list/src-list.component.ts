import { Component, OnInit } from '@angular/core';
import { Fetcher } from '../fetcher';
import { NewsSourceService } from "./src-list.service";

@Component({
  selector: 'app-src-list',
  templateUrl: './src-list.component.html',
  styleUrls: ['./src-list.component.scss'],
  providers: [NewsSourceService]
})

export class SrcListComponent implements OnInit {
  private fetcher: any;
  public srcList: any;
  public isDisabled: boolean = false;

  constructor(private srcService: NewsSourceService) {
    this.fetcher = new Fetcher('src');
  }

  setCurrentSrc($event) {
    this.srcService.changeNewsSource(this.srcList[$event ? $event.target.selectedIndex : 0]);
  }
  
  ngOnInit() {
    this.fetcher.fetchData().then(srcList => {
      this.srcList = srcList;
      this.setCurrentSrc(null);
    });
  }
}