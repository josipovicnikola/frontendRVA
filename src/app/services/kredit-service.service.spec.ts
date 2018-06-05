import { TestBed, inject } from '@angular/core/testing';

import { KreditServiceService } from './kredit-service.service';

describe('KreditServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KreditServiceService]
    });
  });

  it('should be created', inject([KreditServiceService], (service: KreditServiceService) => {
    expect(service).toBeTruthy();
  }));
});
