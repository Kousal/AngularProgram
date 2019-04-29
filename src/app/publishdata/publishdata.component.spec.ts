import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishdataComponent } from './publishdata.component';

describe('PublishdataComponent', () => {
  let component: PublishdataComponent;
  let fixture: ComponentFixture<PublishdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
