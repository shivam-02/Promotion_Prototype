import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-promotions',
  templateUrl: './upcoming-promotions.component.html',
  styleUrls: ['./upcoming-promotions.component.css']
})
export class UpcomingPromotionsComponent implements OnInit {
  
  public cols=[
            {field: 'id', header: 'ID'},
            {field: 'name', header: 'NAME'},
            {field: 'username', header: 'USERNAME'},
            {field: 'email', header: 'EMAIL'}
        ];
  public data=[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  },
  {
    "id": 2,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  },


  {
    "id": 3,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  }
];

  constructor() { }

  ngOnInit() {

    
  }



}
