import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChats2Component } from './pie-chats-2.component';

describe('PieChats2Component', () => {
  let component: PieChats2Component;
  let fixture: ComponentFixture<PieChats2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChats2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChats2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
