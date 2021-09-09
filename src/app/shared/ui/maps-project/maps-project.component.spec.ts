import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsProjectComponent } from './maps-project.component';

describe('MapsProjectComponent', () => {
  let component: MapsProjectComponent;
  let fixture: ComponentFixture<MapsProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
