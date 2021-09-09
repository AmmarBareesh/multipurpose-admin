import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivablereportsComponent } from './receivablereports.component';

describe('ReceivablereportsComponent', () => {
  let component: ReceivablereportsComponent;
  let fixture: ComponentFixture<ReceivablereportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivablereportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivablereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
