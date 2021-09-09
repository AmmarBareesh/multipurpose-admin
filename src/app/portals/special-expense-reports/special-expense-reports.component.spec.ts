import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialExpenseReportsComponent } from './special-expense-reports.component';

describe('SpecialExpenseReportsComponent', () => {
  let component: SpecialExpenseReportsComponent;
  let fixture: ComponentFixture<SpecialExpenseReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialExpenseReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialExpenseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
