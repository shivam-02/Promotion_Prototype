import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { PaginatorModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
 // import { ChartsModule } from 'ng2-charts/ng2-charts';
import 'hammerjs';
import { AppComponent } from './app.component';
import { UpcomingPromotionsComponent } from './upcoming-promotions/upcoming-promotions.component';
import { ActivePromotionsComponent } from './active-promotions/active-promotions.component';
import {ActivePromotionsService} from './active-promotions/active-promotions.service';
import {PromotionService} from './shared/promotion.service';
import { UpcomingPromotionsService } from './upcoming-promotions/upcoming-promotions.service';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component'



@NgModule({
  declarations: [
    AppComponent,
    UpcomingPromotionsComponent,
    ActivePromotionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    PaginatorModule,
    DataTableModule,
    SharedModule,
    ChartModule,
    AppRoutingModule
  ],
  providers: [PromotionService, UpcomingPromotionsService,ActivePromotionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
