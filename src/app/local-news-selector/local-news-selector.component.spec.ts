import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalNewsSelectorComponent } from './local-news-selector.component';

describe('LocalNewsSelectorComponent', () => {
  let component: LocalNewsSelectorComponent;
  let fixture: ComponentFixture<LocalNewsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalNewsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalNewsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
