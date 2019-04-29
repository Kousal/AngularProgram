import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishdataresultComponent } from './publishdataresult.component';

describe('PublishdataresultComponent', () => {
  let component: PublishdataresultComponent;
  let fixture: ComponentFixture<PublishdataresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishdataresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishdataresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
