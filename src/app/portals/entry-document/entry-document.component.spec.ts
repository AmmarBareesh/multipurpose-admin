import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryDocumentComponent } from './entry-document.component';

describe('EntryDocumentComponent', () => {
  let component: EntryDocumentComponent;
  let fixture: ComponentFixture<EntryDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
