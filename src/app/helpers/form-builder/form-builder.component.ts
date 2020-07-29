import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {Observable, Subscription} from "rxjs";
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit,OnDestroy {
  @Input() field;

  @Output() fireSubmit= new EventEmitter();

  bsConfig: Partial<BsDatepickerConfig>;

  constructor() {
    this.bsConfig = Object.assign({}, { containerClass: "theme-orange" });
  }

  onSigned(signatureUrl) {
    this.field.modifiedFormattedValue = signatureUrl;
  }

  ngOnInit(): void {
    if(this.field.formattedValue) {
      this.field.modifiedFormattedValue = this.field.formattedValue;
    }
  }

  fireSubmitEvent () {
    console.log("emitting enter fix");
    this.fireSubmit.emit(true);
  }
  ngOnDestroy(): void {
  }

}
