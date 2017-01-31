import { Component, OnInit } from '@angular/core';
import {UpcomingPromotionsService} from './upcoming-promotions.service';
import {Promotion} from '../shared/promotion';
//import * as d3 from 'd3';
declare var FusionCharts: any;
 

@Component({
  selector: 'app-upcoming-promotions',
  templateUrl: './upcoming-promotions.component.html',
  styleUrls: ['./upcoming-promotions.component.css']
})
export class UpcomingPromotionsComponent implements OnInit {
  
  
  cols:Object[];
  promotions:Promotion[];
  new: number;
  pendingApproval: number;
  rejected: number;
  approved: number;
  displayPromotions:Promotion[];
 

  getChartRender():void{
       var _this=this;
       var fusioncharts = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chartContainer',
        height:'800%',
        width:'100%',
         dataFormat: 'json',
         events: {
             
            dataplotClick: function (eventObj, dataObj) {
              
                  console.log(dataObj.dataIndex);
                  _this.selectData(dataObj.dataIndex);
                  

            }
         },

         dataSource: {
           "chart": {
              "caption": "Split of Promotions by Status",
              "numberPrefix": "$",
              "showPercentInTooltip": "0",
              "decimals": "1",
               "useDataPlotColorForLabels": "1",
              //Theme
               "theme": "fint"
             },
        "data": [{
            "label": "New",
            "value": this.new
        }, {
            "label": "Pending Approval",
            "value": this.pendingApproval
        }, {
            "label": "Rejected",
            "value": this.rejected
        }, {
            "label": "Approved",
            "value": this.approved
        }]
    }
}); 
  
 
    fusioncharts.render();

  }
 

  
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

     this.getChartRender();

}

selectData(value){
    
    switch(value)
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