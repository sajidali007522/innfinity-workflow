import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-next-new-reservation',
  templateUrl: './next-new-reservation.component.html',
  styleUrls: ['./next-new-reservation.component.css']
})
export class NextNewReservationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm () {
    this.router.navigate(['thank-you']);
  }

  goBack () {
    this.router.navigate(['shift']);
  }
}
