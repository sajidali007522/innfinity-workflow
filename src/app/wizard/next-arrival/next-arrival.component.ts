import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-next-arrival',
  templateUrl: './next-arrival.component.html',
  styleUrls: ['./next-arrival.component.css']
})
export class NextArrivalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm () {
    this.router.navigate(['next-leave-date']);
  }

  goBack () {
    this.router.navigate(['next-rotation']);
  }
}
