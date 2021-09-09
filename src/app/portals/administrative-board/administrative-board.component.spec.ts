import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeBoardComponent } from './administrative-board.component';

describe('AdministrativeBoardComponent', () => {
  let component: AdministrativeBoardComponent;
  let fixture: ComponentFixture<AdministrativeBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
