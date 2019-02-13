import { Component, OnInit } from '@angular/core';
import { NewsSourceService } from '../src-list/src-list.service';
import { SourceInterface } from '../interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;
  sourceList: Array<SourceInterface>;

  constructor(private srcService: NewsSourceService) {}

  ngOnInit() {
    this.srcService.sourceList.subscribe(list => this.sourceList = list);
    this.srcService.currentSource.subscribe(srcIndex => {
      if (this.sourceList.length) this.title = this.sourceList[srcIndex].name;
    });
  }

}