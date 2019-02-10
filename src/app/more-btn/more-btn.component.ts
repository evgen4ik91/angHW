import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-more-btn',
  templateUrl: './more-btn.component.html',
  styleUrls: ['./more-btn.component.scss']
})
export class MoreBtnComponent implements OnInit {

  @Output() clickEvent = new EventEmitter();

  constructor() { }
  
  sendClick() {
    this.clickEvent.emit();
  }

  ngOnInit() {
  }

}
