import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-promotions',
  templateUrl: './active-promotions.component.html',
  styleUrls: ['./active-promotions.component.css']
})
export class ActivePromotionsComponent implements OnInit {

  

  cols:any[];
  promotions:Object[];

 

  constructor() { }

  ngOnInit() {

    this.cols=[

      {field:'promotion_name',header:'Promotion'},
      {field:'duration',header:'Duration'},
      {field:'profile_forecast',header:'Profile Forecast'},
      {field:'revenue_forecast',header:'Revenue Forecast' },
      {field:'unit_forecast',header:'Unit Forecast'}


    ];

    this.promotions=[

        {
          'promotion_name':'Promo 557',
          'duration':70,
          'profile_forecast':93,
          'revenue_forecast':65,
          'unit_forecast':83
        },
         {
          'promotion_name':'Promo 880',
          'duration':50,
          'profile_forecast':55,
          'revenue_forecast':20,
          'unit_forecast':66
        },
         {
          'promotion_name':'Promo 990',
          'duration':90,
          'profile_forecast':80,
          'revenue_forecast':70,
          'unit_forecast':44
        },
         {
          'promotion_name':'Promo 200',
          'duration':25,
          'profile_forecast':100,
          'revenue_forecast':50,
          'unit_forecast':70
        },

    ];
  }

}
