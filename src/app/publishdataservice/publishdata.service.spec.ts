import { TestBed } from '@angular/core/testing';

import { PublishdataService } from './publishdata.service';

describe('PublishdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublishdataService = TestBed.get(PublishdataService);
    expect(service).toBeTruthy();
  });
});
