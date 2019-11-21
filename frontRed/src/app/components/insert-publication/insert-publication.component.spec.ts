import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPublicationComponent } from './insert-publication.component';

describe('InsertPublicationComponent', () => {
  let component: InsertPublicationComponent;
  let fixture: ComponentFixture<InsertPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
