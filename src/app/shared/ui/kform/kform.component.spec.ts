import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KformComponent } from './kform.component';

describe('KformComponent', () => {
  let component: KformComponent;
  let fixture: ComponentFixture<KformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
