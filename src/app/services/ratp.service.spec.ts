/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RatpService } from './ratp.service';

describe('Service: Ratp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatpService]
    });
  });

  it('should ...', inject([RatpService], (service: RatpService) => {
    expect(service).toBeTruthy();
  }));
});
