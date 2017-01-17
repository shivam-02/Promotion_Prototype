/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule} from '@angular/material';
import { UpcomingPromotionsComponent } from './upcoming-promotions.component';
import { PaginatorModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';

describe('UpcomingPromotionsComponent', () => {
  let component: UpcomingPromotionsComponent;
  let fixture: ComponentFixture<UpcomingPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingPromotionsComponent ],
      imports: [
        MaterialModule.forRoot(),
        PaginatorModule,
        DataTableModule, 
        SharedModule,
        ChartModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingPromotionsComponent);
    component = fixture.componentInstance;
   
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }); 
});
