import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateReportsComponent } from './late-reports.component';

describe('LateReportsComponent', () => {
  let component: LateReportsComponent;
  let fixture: ComponentFixture<LateReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
