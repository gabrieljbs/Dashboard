import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChardsComponent } from './pie-chards.component';

describe('PieChardsComponent', () => {
  let component: PieChardsComponent;
  let fixture: ComponentFixture<PieChardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieChardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
