import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  @Input() field;
  constructor() {
  }

  ngOnInit(): void {

  }

}
