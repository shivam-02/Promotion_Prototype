import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { UpcomingPromotionsComponent } from './upcoming-promotions/upcoming-promotions.component';
import { ActivePromotionsComponent } from './active-promotions/active-promotions.component';
import {ActivePromotionsService} from './active-promotions/active-promotions.service';
import {PromotionService} from './shared/promotion.service';
import { UpcomingPromotionsService } from './upcoming-promotions/upcoming-promotions.service';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import {FlexLayoutModule} from "@angular/flex-layout";


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
    AppRoutingModule,
    FlexLayoutModule.forRoot()

   
  ],
  providers: [PromotionService, UpcomingPromotionsService,ActivePromotionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
