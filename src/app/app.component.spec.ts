import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { Fetcher } from './fetcher';

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

describe('fetch function', function () {
  it('should get news list', function(done) {
    new Fetcher('news').fetchData('abc-news')
      .then((result) => {
        expect(result.length).toEqual(10);
        done();
      });
  });
  
  it('should get source list', function(done) {
    new Fetcher('src').fetchData()
      .then((result) => {
        expect(result.length).toBeGreaterThan(0);
        done();
      });
  });
});