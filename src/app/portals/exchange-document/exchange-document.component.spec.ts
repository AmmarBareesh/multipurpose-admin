import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeDocumentComponent } from './exchange-document.component';

describe('ExchangeDocumentComponent', () => {
  let component: ExchangeDocumentComponent;
  let fixture: ComponentFixture<ExchangeDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
