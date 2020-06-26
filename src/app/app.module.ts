import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepBasicComponent } from './wizard/step-basic/step-basic.component';
import { StepNextRotationComponent } from './wizard/step-next-rotation/step-next-rotation.component';
import { NextArrivalComponent } from './wizard/next-arrival/next-arrival.component';
import { NextDepartureComponent } from './wizard/next-departure/next-departure.component';
import { NextShiftComponent } from './wizard/next-shift/next-shift.component';
import { NextNewReservationComponent } from './wizard/next-new-reservation/next-new-reservation.component';
import { ThankYouComponent } from './wizard/thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    StepBasicComponent,
    StepNextRotationComponent,
    NextArrivalComponent,
    NextDepartureComponent,
    NextShiftComponent,
    NextNewReservationComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
