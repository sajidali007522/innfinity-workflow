import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-step-basic',
  templateUrl: './step-basic.component.html',
  styleUrls: ['./step-basic.component.css']
})
export class StepBasicComponent implements OnInit {

  constructor(public router: Router ) { }

  ngOnInit(): void {
  }

  submitForm () {
    this.router.navigate(['next-rotation']);
  }

}
