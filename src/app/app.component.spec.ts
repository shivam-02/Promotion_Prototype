/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UpcomingPromotionsComponent } from './upcoming-promotions/upcoming-promotions.component';
import { ActivePromotionsComponent } from './active-promotions/active-promotions.component';
import { MaterialModule} from '@angular/material';
import { PaginatorModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { Subscription }   from 'rxjs/Subscription';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UpcomingPromotionsComponent,
        ActivePromotionsComponent
      ],
      imports: [
        MaterialModule.forRoot(),
        PaginatorModule,
        ChartModule,
        DataTableModule, 
        SharedModule
       ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

 /* it(`should have as title 'app works!'`, async(() => {
   let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
   expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
   }));*/
});
