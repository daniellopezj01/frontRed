import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetPeopleComponent } from './meet-people.component';

describe('MeetPeopleComponent', () => {
  let component: MeetPeopleComponent;
  let fixture: ComponentFixture<MeetPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
