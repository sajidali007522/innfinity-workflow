import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepBasicComponent } from './wizard/step-basic/step-basic.component';
import { StepNextRotationComponent } from './wizard/step-next-rotation/step-next-rotation.component';
import { NextArrivalComponent } from './wizard/next-arrival/next-arrival.component';
import { NextDepartureComponent } from './wizard/next-departure/next-departure.component';
import { NextShiftComponent } from './wizard/next-shift/next-shift.component';
import { NextNewReservationComponent } from './wizard/next-new-reservation/next-new-reservation.component';
import { ThankYouComponent } from './wizard/thank-you/thank-you.component';
import { ConfigService } from './config.service' ;
import {HttpClientModule} from "@angular/common/http";
import { FormBuilderComponent } from './helpers/form-builder/form-builder.component';
import { SignaturePadComponent } from "./helpers/signature-pad/signature-pad.component";
import {FormsModule} from "@angular/forms";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SignaturePadModule } from 'ngx-signaturepad';
import { SignaturesComponent } from './signatures/signatures.component';
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    StepBasicComponent,
    StepNextRotationComponent,
    NextArrivalComponent,
    NextDepartureComponent,
    NextShiftComponent,
    NextNewReservationComponent,
    ThankYouComponent,
    FormBuilderComponent,
    SignaturePadComponent,
    SignaturesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    PopoverModule.forRoot(),
    SignaturePadModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: (appConfigService: ConfigService) => {
        return () => {
          //Make sure to return a promise!
          return appConfigService.loadAppConfig();
        };
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
