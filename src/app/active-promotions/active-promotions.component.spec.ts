/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule} from '@angular/material';
import { ActivePromotionsComponent } from './active-promotions.component';
import { PaginatorModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';

describe('ActivePromotionsComponent', () => {
  let component: ActivePromotionsComponent;
  let fixture: ComponentFixture<ActivePromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePromotionsComponent ],
       imports: [
        MaterialModule.forRoot(),
        PaginatorModule,
        ChartModule,
        DataTableModule, 
        SharedModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
