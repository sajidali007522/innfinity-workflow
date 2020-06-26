import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-step-next-rotation',
  templateUrl: './step-next-rotation.component.html',
  styleUrls: ['./step-next-rotation.component.css']
})
export class StepNextRotationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm () {
    this.router.navigate(['next-return-date']);
  }

  goBack () {
    this.router.navigate(['']);
  }
}
