import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../shared/promotion.service';
@Injectable()
export class ActivePromotionsService {
  
  PROMOTIONS: Promotion[];
  cols:Object[];

  constructor(private promotionService:PromotionService) { }

  getPromotions(): Promotion[]{
   this.PROMOTIONS=this.promotionService.getPromotions();
   return this.PROMOTIONS;
  }

   getColumnHeaders(): Object[]{
    this.cols= [
            {field:'check_box'},
            {field: 'promotionName', header: 'Promotion'},
            {field:'description', header:'Description'},
            {field: 'startDate', header: 'Start Date'},
            {field: 'endDate', header: 'End Date'},
            {field:'status', header:'Status'}
         ];

      return this.cols;
  }



}
