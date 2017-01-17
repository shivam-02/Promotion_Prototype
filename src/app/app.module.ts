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

@NgModule({
  declarations: [
    AppComponent,
    UpcomingPromotionsComponent,
    ActivePromotionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    PaginatorModule,
    DataTableModule,
    SharedModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
