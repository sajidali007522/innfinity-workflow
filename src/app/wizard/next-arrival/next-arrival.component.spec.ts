import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextArrivalComponent } from './next-arrival.component';

describe('NextArrivalComponent', () => {
  let component: NextArrivalComponent;
  let fixture: ComponentFixture<NextArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextArrivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
