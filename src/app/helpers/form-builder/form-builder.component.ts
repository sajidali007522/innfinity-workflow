import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {Observable, Subscription} from "rxjs";
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit,OnDestroy {
  @Input() field;
  bsConfig: Partial<BsDatepickerConfig>;
  private intervalTime;
  public wait;

  constructor() {
    this.bsConfig = Object.assign({}, { containerClass: "theme-orange" });
  }

  onSigned(signatureUrl) {
    console.log(signatureUrl);
    this.field.modifiedFormattedValue = signatureUrl;
  }

  ngOnInit(): void {
    if(this.field.formattedValue) {
      this.field.modifiedFormattedValue = this.field.formattedValue;
    }
  }

  ngOnDestroy(): void {
  }

}
