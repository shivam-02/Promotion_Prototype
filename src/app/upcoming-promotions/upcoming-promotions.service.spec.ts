/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpcomingPromotionsService } from './upcoming-promotions.service';

describe('UpcomingPromotionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingPromotionsService]
    });
  });

  it('should ...', inject([UpcomingPromotionsService], (service: UpcomingPromotionsService) => {
    expect(service).toBeTruthy();
  }));
});
