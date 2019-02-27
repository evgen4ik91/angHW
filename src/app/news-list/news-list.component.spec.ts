import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { NewsListComponent } from './news-list.component';
import { ArticlesMorePipe, ArticlesFilterPipe, ArticlesLocalPipe } from './news-list.pipes';
import localNews from '../localNews';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListComponent, ArticlesMorePipe, ArticlesFilterPipe, ArticlesLocalPipe ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [HttpClientModule],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render filter', () => {
    let newsContainer = fixture.debugElement.nativeElement;
    expect(newsContainer.querySelector('app-filter')).not.toBe(null);
  });


  it('should not render news', () => {
    let newsContainer = fixture.debugElement.nativeElement;
    expect(newsContainer.querySelector('app-news-item')).toBe(null);
  });

  it('should not render more button', () => {
    let newsContainer = fixture.debugElement.nativeElement;
    expect(newsContainer.querySelector('app-more-btn')).toBe(null);
  });

});