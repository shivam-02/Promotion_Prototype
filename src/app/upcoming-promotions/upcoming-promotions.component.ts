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
  
  constructor() {
       
    }

 
  

  ngOnInit() {
   
   this.cols=[
            {field:'check_box'},
            {field: 'promotion_name', header: 'Promotion'},
            {field: 'start_date', header: 'Start Date'},
            {field: 'profit_forecast', header: 'Profit Forecast'},
            {field: 'revenue_forecast', header: 'Revenue Forecast'},
            {field: 'unit_forecast', header: 'Unit Forecast'},
            {field: 'last_updated', header: 'Last Updated'},
            {field: 'priority', header: 'Priority'},
         ];
    this. promotions=[
         {
          
          'promotion_name':'Promo 557',
          'start_date':'29/10/2016',
          'profit_forecast':93,
          'revenue_forecast':65,
          'unit_forecast':83,
          'last_updated':'3/12/2016',
          'priority':3

        },
         {
           
          'promotion_name':'Promo 880',
          'start_date':'29/10/2016',
          'profit_forecast':55,
          'revenue_forecast':20,
          'unit_forecast':66,
          'last_updated':'3/12/2016',
          'priority':3
        },
         {
          
          'promotion_name':'Promo 990',
          'start_date':'29/10/2016',
          'profit_forecast':80,
          'revenue_forecast':70,
          'unit_forecast':44,
          'last_updated':'3/12/2016',
          'priority':3
        },
         {
           
          'promotion_name':'Promo 200',
          'start_date':'29/10/2016',
          'profit_forecast':100,
          'revenue_forecast':50,
          'unit_forecast':70,
          'last_updated':'3/12/2016',
          'priority':3
        }
    ];
     this.data = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };

  }



}
