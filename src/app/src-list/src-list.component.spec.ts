import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcListComponent } from './src-list.component';

describe('SrcListComponent', () => {
  let component: SrcListComponent;
  let fixture: ComponentFixture<SrcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
