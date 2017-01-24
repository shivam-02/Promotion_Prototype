import { Component, OnInit } from '@angular/core';
import {ActivePromotionsService} from './active-promotions.service';
import {Promotion} from '../shared/promotion';

@Component({
  selector: 'app-active-promotions',
  templateUrl: './active-promotions.component.html',
  styleUrls: ['./active-promotions.component.css']
})
export class ActivePromotionsComponent implements OnInit {
  cols:any[];
  activePromotions:Promotion[];
  constructor(private activePromotionsService:ActivePromotionsService) {
   
   }

  ngOnInit() {

    this.cols=this.activePromotionsService.getColumnHeaders();
    

    this.activePromotions=this.activePromotionsService.getActivePromotions();

   /* console.log(this.cols);
    console.log(this.activePromotions);*/
}
}
