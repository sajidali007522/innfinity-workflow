import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StepBasicComponent} from "./wizard/step-basic/step-basic.component";
import {ThankYouComponent} from "./wizard/thank-you/thank-you.component";
import {NextNewReservationComponent} from "./wizard/next-new-reservation/next-new-reservation.component";
import {NextShiftComponent} from "./wizard/next-shift/next-shift.component";
import {NextDepartureComponent} from "./wizard/next-departure/next-departure.component";
import {NextArrivalComponent} from "./wizard/next-arrival/next-arrival.component";
import {StepNextRotationComponent} from "./wizard/step-next-rotation/step-next-rotation.component";

const routes: Routes = [
  {path: "", component:StepBasicComponent },
  {path: "next-rotation", component:StepNextRotationComponent },
  {path: "next-return-date", component:NextArrivalComponent },
  {path: "next-leave-date", component:NextDepartureComponent },
  {path: "shift", component:NextShiftComponent },
  {path: "request-new-reservation", component:NextNewReservationComponent },
  {path: "thank-you", component:ThankYouComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
