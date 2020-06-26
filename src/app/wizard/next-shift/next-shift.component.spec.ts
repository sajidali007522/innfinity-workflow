import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextShiftComponent } from './next-shift.component';

describe('NextShiftComponent', () => {
  let component: NextShiftComponent;
  let fixture: ComponentFixture<NextShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
