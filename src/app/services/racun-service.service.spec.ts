import { TestBed, inject } from '@angular/core/testing';

import { RacunServiceService } from './racun-service.service';

describe('RacunServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RacunServiceService]
    });
  });

  it('should be created', inject([RacunServiceService], (service: RacunServiceService) => {
    expect(service).toBeTruthy();
  }));
});
