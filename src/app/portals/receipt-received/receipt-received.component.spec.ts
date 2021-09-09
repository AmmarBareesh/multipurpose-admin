import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptReceivedComponent } from './receipt-received.component';

describe('ReceiptReceivedComponent', () => {
  let component: ReceiptReceivedComponent;
  let fixture: ComponentFixture<ReceiptReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
