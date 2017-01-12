import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';

import {DataTableModule,SharedModule} from 'primeng/primeng';
import 'hammerjs';

import { AppComponent } from './app.component';
import { UpcomingPromotionsComponent } from './upcoming-promotions/upcoming-promotions.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ActivePromotionsComponent } from './active-promotions/active-promotions.component';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingPromotionsComponent,
    HomeComponentComponent,
    ActivePromotionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    
    DataTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
