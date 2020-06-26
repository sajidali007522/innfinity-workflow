import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextNewReservationComponent } from './next-new-reservation.component';

describe('NextNewReservationComponent', () => {
  let component: NextNewReservationComponent;
  let fixture: ComponentFixture<NextNewReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextNewReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextNewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
