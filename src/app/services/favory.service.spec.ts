/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FavoryService } from './favory.service';

describe('Service: Favory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoryService]
    });
  });

  it('should ...', inject([FavoryService], (service: FavoryService) => {
    expect(service).toBeTruthy();
  }));
});
