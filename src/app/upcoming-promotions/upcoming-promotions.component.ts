import { Component, OnInit } from '@angular/core';
import {UpcomingPromotionsService} from './upcoming-promotions.service';
import {Promotion} from '../shared/promotion';

@Component({
  selector: 'app-upcoming-promotions',
  templateUrl: './upcoming-promotions.component.html',
  styleUrls: ['./upcoming-promotions.component.css']
})
export class UpcomingPromotionsComponent implements OnInit {

  cols:Object[];
  promotions:Promotion[];
  data: any;
  new: number;
  pendingApproval: number;
  rejected: number;
  approved: number;
  displayPromotions:Promotion[];
  
  constructor(private upcomingPromotionsService: UpcomingPromotionsService) {
    
       }

 
  

  ngOnInit() {
   
  this.new=0;
  this.pendingApproval=0;
  this.rejected=0;
  this.approved=0;

   this.cols= this.upcomingPromotionsService.getColumnHeaders();
    
   this.promotions= this.upcomingPromotionsService.getPromotions();

   this.displayPromotions=this.promotions;
  
   for(let i=0; i<this.promotions.length; i++)
     {
      if(this.promotions[i]['status']==='N'){
      this.new++;
      }
      else if(this.promotions[i]['status']==='P'){
      this.pendingApproval++;
      }
      else if(this.promotions[i]['status']==='R'){
      this.rejected++;
      }
      else if(this.promotions[i]['status']==='A'){
      this.approved++;
      }
     }

   

     this.data = {
            labels: ['New','Pending Approval','Rejected','Approved'],
            datasets: [
                {
                    data: [this.new, this.pendingApproval, this.rejected, this.approved],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#808080'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#808080'
                    ]
                }]    
            };

}

 selectData(event){
    
    switch(event.element._index)
    {
      case 0:
      this.displayPromotions=this.upcomingPromotionsService.getDisplayPromotions('N');
      break;
      case 1:
      this.displayPromotions=this.upcomingPromotionsService.getDisplayPromotions('P');
      break; 
      case 2:
      this.displayPromotions=this.upcomingPromotionsService.getDisplayPromotions('R');
      break;
      case 3:
      this.displayPromotions=this.upcomingPromotionsService.getDisplayPromotions('A');
      break;
    }

  
  }
 
}