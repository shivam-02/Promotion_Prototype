import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../shared/promotion.service';
@Injectable()
export class ActivePromotionsService {
  
  activePromotions: Promotion[]=[];
  cols:Object[];
  

  constructor(private promotionService:PromotionService) { 
    console.log('in active promotion service');
  }

  

   getColumnHeaders(): Object[]{
    this.cols= [
          
            {field: 'promotionName', header: 'Promotion'},
            {field:'description', header:'Description'},
            {field: 'startDate', header: 'Start Date'},
            {field: 'endDate', header: 'End Date'},
            {field:'status', header:'Status'}
         ];

         console.log('in get coloumns of promotions');

      return this.cols;
  }

getActivePromotions():Promotion[]{

  

 let  promotions:Promotion[];
 promotions=this.promotionService.getPromotions();

 console.log(promotions);

for(let i=0,y=0;i<promotions.length;i++)
{
  if(promotions[i]["status"]==="A")
  {
    this.activePromotions[y++]=promotions[i];
    
  }
}
console.log('in get active promotions');
return this.activePromotions;


};


}
