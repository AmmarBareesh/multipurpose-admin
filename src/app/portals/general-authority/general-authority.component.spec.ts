import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAuthorityComponent } from './general-authority.component';

describe('GeneralAuthorityComponent', () => {
  let component: GeneralAuthorityComponent;
  let fixture: ComponentFixture<GeneralAuthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAuthorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
