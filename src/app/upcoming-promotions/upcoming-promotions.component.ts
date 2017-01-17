import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upcoming-promotions',
  templateUrl: './upcoming-promotions.component.html',
  styleUrls: ['./upcoming-promotions.component.css']
})
export class UpcomingPromotionsComponent implements OnInit {

  cols:any[];
  promotions:Object[];
  data: any;
  new: number;
  pendingApproval: number;
  rejected: number;
  approved: number;
  displayPromotions:Object[];
  
  constructor() {
    
       }

 
  

  ngOnInit() {
   
  this.new=0;
  this.pendingApproval=0;
  this.rejected=0;
  this.approved=0;

   this.cols=[
            {field:'check_box'},
            {field: 'promotion_name', header: 'Promotion'},
            {field: 'start_date', header: 'Start Date'},
            {field: 'profit_forecast', header: 'Profit Forecast'},
            {field: 'revenue_forecast', header: 'Revenue Forecast'},
            {field: 'unit_forecast', header: 'Unit Forecast'},
            {field: 'last_updated', header: 'Last Updated'},
            {field: 'priority', header: 'Priority'},
            {field:'status', header:'Status'}
         ];
    this. promotions=[
         {
          
          'promotion_name':'Promo 557',
          'start_date':'29/10/2016',
          'profit_forecast':93,
          'revenue_forecast':65,
          'unit_forecast':83,
          'last_updated':'3/12/2016',
          'priority':3,
          'status':'Approved'

        },
         {
           
          'promotion_name':'Promo 880',
          'start_date':'29/10/2016',
          'profit_forecast':55,
          'revenue_forecast':20,
          'unit_forecast':66,
          'last_updated':'3/12/2016',
          'priority':3,
          'status':'Approved'
          
        },
         {
          
          'promotion_name':'Promo 990',
          'start_date':'29/10/2016',
          'profit_forecast':80,
          'revenue_forecast':70,
          'unit_forecast':44,
          'last_updated':'3/12/2016',
          'priority':3,
          'status':'Approved'
        },
         {
           
          'promotion_name':'Promo 200',
          'start_date':'29/10/2016',
          'profit_forecast':100,
          'revenue_forecast':50,
          'unit_forecast':70,
          'last_updated':'3/12/2016',
          'priority':3,
          'status':'Approved'
        },
        {
           
          'promotion_name':'Promo 208',
          'start_date':'29/10/2017',
          'profit_forecast':100,
          'revenue_forecast':50,
          'unit_forecast':70,
          'last_updated':'3/12/2016',
          'priority':3,
          'status':'New'
        },
        {
           
          'promotion_name':'Promo 888',
          'start_date':'29/01/2017',
          'profit_forecast':100,
          'revenue_forecast':50,
          'unit_forecast':70,
          'last_updated':'3/12/2016',
          'priority':3,
          'status':'New'
        },
        {
           
          'promotion_name':'Promo 212',
          'start_date':'15/11/2016',
          'profit_forecast':100,
          'revenue_forecast':50,
          'unit_forecast':70,
          'last_updated':'3/12/2016',
          'priority':3,
          'status':'Rejected'
        },
        {
           
          'promotion_name':'Promo 158',
          'start_date':'15/11/2017',
          'profit_forecast':100,
          'revenue_forecast':50,
          'unit_forecast':70,
          'last_updated':'3/12/2016',
          'priority':3,
          'status':'Pending Approval'
        },
          {
           
          'promotion_name':'Promo 158',
          'start_date':'15/11/2017',
          'profit_forecast':100,
          'revenue_forecast':50,
          'unit_forecast':70,
          'last_updated':'3/12/2016',
          'priority':3,
          'status':'Pending Approval'
        }

    ];
    this.displayPromotions=this.promotions;
  
   for(let i=0; i<this.promotions.length; i++)
     {
      if(this.promotions[i]['status']==='New'){
      this.new++;
      }
      else if(this.promotions[i]['status']==='Pending Approval'){
      this.pendingApproval++;
      }
      else if(this.promotions[i]['status']==='Rejected'){
      this.rejected++;
      }
      else if(this.promotions[i]['status']==='Approved'){
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
      this.getDisplayPromotions('New');
      break;
      case 1:
      this.getDisplayPromotions('Pending Approval');
      break; 
      case 2:
      this.getDisplayPromotions('Rejected');
      break;
      case 3:
      this.getDisplayPromotions('Approved');
      break;
    }

  
  }

getDisplayPromotions(status:string):void{
  this.displayPromotions=[];
  let j=0;
  for(let i=0; i<this.promotions.length; i++)
    {
    if(this.promotions[i]['status']===status)
     {
      this.displayPromotions[j++]=this.promotions[i];
     } 
  }
}
 
}