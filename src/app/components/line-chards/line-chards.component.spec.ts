import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChardsComponent } from './line-chards.component';

describe('LineChardsComponent', () => {
  let component: LineChardsComponent;
  let fixture: ComponentFixture<LineChardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineChardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineChardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
