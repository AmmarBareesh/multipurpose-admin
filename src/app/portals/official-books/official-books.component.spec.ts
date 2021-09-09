import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialBooksComponent } from './official-books.component';

describe('OfficialBooksComponent', () => {
  let component: OfficialBooksComponent;
  let fixture: ComponentFixture<OfficialBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
