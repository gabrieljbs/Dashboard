import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnHorizontalChartsComponent } from './column-horizontal-charts.component';

describe('ColumnHorizontalChartsComponent', () => {
  let component: ColumnHorizontalChartsComponent;
  let fixture: ComponentFixture<ColumnHorizontalChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnHorizontalChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnHorizontalChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
