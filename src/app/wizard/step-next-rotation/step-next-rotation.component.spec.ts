import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepNextRotationComponent } from './step-next-rotation.component';

describe('StepNextRotationComponent', () => {
  let component: StepNextRotationComponent;
  let fixture: ComponentFixture<StepNextRotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepNextRotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepNextRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
