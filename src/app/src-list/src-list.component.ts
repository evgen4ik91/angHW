import { Component, OnInit } from '@angular/core';
import { Fetcher } from '../fetcher';

@Component({
  selector: 'app-src-list',
  templateUrl: './src-list.component.html',
  styleUrls: ['./src-list.component.scss']
})

export class SrcListComponent implements OnInit {
  private fetcher: any;
  public currentSrc: any = {id: 'all', name: 'All sources'};
  public srcList: any;
  public isDisabled: boolean = false;

  constructor() {
    this.fetcher = new Fetcher('src');
  }

  setCurrentSrc(e) {
    let el = e.target;
    console.log(el);
    this.currentSrc = {
      id: el.getAttribute('value'),
      name: el.innerText,
    }
    console.log(this.currentSrc);
  }
  
  ngOnInit() {
    this.fetcher.fetchData().then(srcList => {
      this.srcList = srcList;
      this.currentSrc = srcList[0];
    });
  }
}