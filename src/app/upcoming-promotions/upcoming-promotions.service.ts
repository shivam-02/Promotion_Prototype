import { Injectable } from '@angular/core';
import { PromotionService } from '../shared/promotion.service';
import { Promotion } from '../shared/promotion';

@Injectable()
export class UpcomingPromotionsService {
   PROMOTIONS: Promotion[];
   cols:Object[];
   displayPromotions: Promotion[]=[];

  constructor(private promotionService: PromotionService) { }

  
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
            {field: 'endDate', header: 'End Date'}
            
         ];

      return this.cols;
  }
  

   // TODO Return Promise instead of DisplayPromotions Array
  getDisplayPromotions(status:string): Promotion[]{
    
  
    this.displayPromotions=[];
    let j=0;
    for(let i=0; i<this.PROMOTIONS.length; i++)
      {
        
      if(this.PROMOTIONS[i]['status']===status)
       {
         
       this.displayPromotions[j++]=this.PROMOTIONS[i];
       } 
      }
     
    return this.displayPromotions;
   }
  
}
