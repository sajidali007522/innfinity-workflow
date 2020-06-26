import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDepartureComponent } from './next-departure.component';

describe('NextDepartureComponent', () => {
  let component: NextDepartureComponent;
  let fixture: ComponentFixture<NextDepartureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextDepartureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextDepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
