import { TestBed, inject } from '@angular/core/testing';

import { TrunkService } from './trunk.service';

describe('TrunkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrunkService]
    });
  });

  it('should be created', inject([TrunkService], (service: TrunkService) => {
    expect(service).toBeTruthy();
  }));
});
