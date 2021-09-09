import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialVisitsComponent } from './official-visits.component';

describe('OfficialVisitsComponent', () => {
  let component: OfficialVisitsComponent;
  let fixture: ComponentFixture<OfficialVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
