import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NewsItemComponent } from './news-item.component';

let article = {
  "author": null,
  "title": "Huawei's foldable Mate X First Look at MWC 2019: Samsung's Galaxy Fold rival - Engadget",
  "description": null,
  "url": "https://www.youtube.com/watch?v=NnO08HnZf10",
  "urlToImage": null,
  "publishedAt": "2019-02-24T13:45:00Z",
  "content": "test"
}

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemComponent);
    component = fixture.componentInstance;
    component.article = article;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
