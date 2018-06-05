import { TestBed, inject } from '@angular/core/testing';

import { TipRacunaServiceService } from './tip-racuna-service.service';

describe('TipRacunaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipRacunaServiceService]
    });
  });

  it('should be created', inject([TipRacunaServiceService], (service: TipRacunaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
