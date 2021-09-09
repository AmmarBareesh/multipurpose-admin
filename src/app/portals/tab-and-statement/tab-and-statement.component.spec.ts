import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAndStatementComponent } from './tab-and-statement.component';

describe('TabAndStatementComponent', () => {
  let component: TabAndStatementComponent;
  let fixture: ComponentFixture<TabAndStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAndStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAndStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
