import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm () {
    this.router.navigate(['next-return-date']);
  }
}
