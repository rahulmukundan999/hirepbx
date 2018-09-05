import { TestBed, inject } from '@angular/core/testing';

import { ReceptionistService } from './receptionist.service';

describe('ReceptionistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceptionistService]
    });
  });

  it('should be created', inject([ReceptionistService], (service: ReceptionistService) => {
    expect(service).toBeTruthy();
  }));
});
