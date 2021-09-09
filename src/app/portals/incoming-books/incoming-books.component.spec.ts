import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingBooksComponent } from './incoming-books.component';

describe('IncomingBooksComponent', () => {
  let component: IncomingBooksComponent;
  let fixture: ComponentFixture<IncomingBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
