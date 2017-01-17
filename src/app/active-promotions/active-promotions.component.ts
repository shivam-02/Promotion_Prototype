import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-promotions',
  templateUrl: './active-promotions.component.html',
  styleUrls: ['./active-promotions.component.css']
})
export class ActivePromotionsComponent implements OnInit {
  cols:any[];
  promotions:Object[];
  constructor() {
   
   }

  ngOnInit() {

    this.cols=[

      {field:'promotion_name',header:'Promotion'},
      {field:'duration',header:'Duration'},
      {field:'profit_forecast',header:'Profit Forecast'},
      {field:'revenue_forecast',header:'Revenue Forecast' },
      {field:'unit_forecast',header:'Unit Forecast'}


    ];

    this.promotions=[

        {
          'promotion_name':'Promo 557',
          'duration':70,
          'profit_forecast':93,
          'revenue_forecast':65,
          'unit_forecast':83
        },
         {
          'promotion_name':'Promo 880',
          'duration':50,
          'profit_forecast':55,
          'revenue_forecast':20,
          'unit_forecast':66
        },
         {
          'promotion_name':'Promo 990',
          'duration':90,
          'profit_forecast':10,
          'revenue_forecast':90,
          'unit_forecast':44
        },
         {
          'promotion_name':'Promo 200',
          'duration':25,
          'profit_forecast':100,
          'revenue_forecast':10,
          'unit_forecast':70
        },

    ];
  }

}
