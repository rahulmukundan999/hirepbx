import { TestBed, inject } from '@angular/core/testing';

import { RingService } from './ring.service';

describe('RingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RingService]
    });
  });

  it('should be created', inject([RingService], (service: RingService) => {
    expect(service).toBeTruthy();
  }));
});
