import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { Fetcher } from './fetcher';
import * as fetchMock from 'fetch-mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

afterEach(fetchMock.restore);

describe('fetch function', function () {
  it('should get news list', function(done) {
    // fetchMock.mock('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=5a67f9304faa41e5b457f84bd54c0a20', {
    //   status: 200,
    //   body: {
    //     data: [
    //       { id: 1 },
    //     ],
    //   },
    // })
    new Fetcher('news').fetchData('abc-news')
      .then((result) => {
        expect(result.length).toEqual(10);
        done();
      });
  });
  
  it('should get source list', function(done) {
    // fetchMock.mock('https://newsapi.org/v2/sources?apiKey=5a67f9304faa41e5b457f84bd54c0a20', {
    //   status: 200,
    //   body: {
    //     data: [
    //       { id: 1 },
    //     ],
    //   },
    // })
    new Fetcher('src').fetchData()
      .then((result) => {
        expect(result.length).toBeGreaterThan(0);
        done();
      });
  });
  
});