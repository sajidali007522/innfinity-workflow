import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StepBasicComponent} from "./wizard/step-basic/step-basic.component";
import {SignaturesComponent} from "./signatures/signatures.component";
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";

const routes: Routes = [
  {path: "", component:StepBasicComponent },
  {path: ":ID", component:StepBasicComponent },
  {path: "signature/view", component:SignaturesComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgxExtendedPdfViewerModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
