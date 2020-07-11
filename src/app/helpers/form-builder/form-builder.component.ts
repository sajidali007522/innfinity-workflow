import {Component, Input, OnInit} from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  @Input() field;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor() {
    this.bsConfig = Object.assign({}, { containerClass: "theme-orange" });
  }

  ngOnInit(): void {
    if(this.field.formattedValue) {
      this.field.modifiedFormattedValue = this.field.formattedValue;
    }
  }

}
