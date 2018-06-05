import { TestBed, inject } from '@angular/core/testing';

import { KlijentServiceService } from './klijent-service.service';

describe('KlijentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KlijentServiceService]
    });
  });

  it('should be created', inject([KlijentServiceService], (service: KlijentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
