import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StepBasicComponent} from "./wizard/step-basic/step-basic.component";

const routes: Routes = [
  {path: "", component:StepBasicComponent },
  {path: ":ID", component:StepBasicComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
