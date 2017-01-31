import { Injectable } from '@angular/core';
import {Promotion} from './promotion';


@Injectable()
export class PromotionService {
 
 PROMOTIONS:Promotion[];

  constructor() { 
      //TODO Remove hardcoded PROMOTIONS Array
    this.PROMOTIONS= [
         {
            promotionName:'Promo 557',
            description: 'abcd',
             startDate: '29-12-2016',
             endDate: '15-8-2017',
             status: 'A'
             
         },
		 {
             promotionName:'Promo 275',
             description: 'abcd',
             startDate: '29-2-2017',
             endDate: '15-8-2017',
             status: 'N'
     },
             
		 {
             promotionName:'Promo 248',
             description: 'abcd',
             startDate: '12-12-2016',
             endDate: '16-8-2017',
             status: 'R'
            
         },
		 {
             promotionName:'Promo 356',
             description: 'abcd',
             startDate: '20-7-2017',
             endDate: '15-8-2017',
             status: 'N'
             
         },
		 {
             promotionName:'Promo 111',
             description: 'abcd',
             startDate: '23-9-2017',
             endDate: '15-8-2018',
             status: 'A'
             
            
         },
		 {
             promotionName:'Promo 444',
            description: 'abcd',
             startDate: '19-2-2016',
             endDate: '15-8-2017',
             status: 'P'
            
         },
         {
             promotionName:'Promo 432',
            description: 'abcd',
             startDate: '19-2-2016',
             endDate: '15-8-2017',
             status: 'P'
            
         },
         {
             promotionName:'Promo 578',
            description: 'abcd',
             startDate: '19-2-2016',
             endDate: '15-8-2017',
             status: 'P'
            
         },
         {
             promotionName:'Promo 265',
            description: 'abcd',
             startDate: '19-2-2016',
             endDate: '15-8-2017',
             status: 'P'
            
         },
         {
            promotionName:'Promo 132',
            description: 'abcd',
             startDate: '29-12-2016',
             endDate: '15-8-2017',
             status: 'A'
             
         },
         {
            promotionName:'Promo 342',
            description: 'abcd',
             startDate: '29-12-2016',
             endDate: '15-8-2017',
             status: 'A'
             
         },
         {
            promotionName:'Promo 909',
            description: 'abcd',
             startDate: '29-12-2016',
             endDate: '15-8-2017',
             status: 'A'
             
         }
		 
		 
     ];
  }
  
   //TODO Get Promotions data from database
   // TODO Return Promise instead of Promotions Array
   getPromotions(): Promotion[]{
    
    return this.PROMOTIONS;
   }

}
