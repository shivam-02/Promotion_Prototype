/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActivePromotionsService } from './active-promotions.service';

describe('ActivePromotionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivePromotionsService]
    });
  });

  it('should ...', inject([ActivePromotionsService], (service: ActivePromotionsService) => {
    expect(service).toBeTruthy();
  }));
});
