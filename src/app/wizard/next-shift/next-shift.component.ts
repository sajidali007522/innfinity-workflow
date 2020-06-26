import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-next-shift',
  templateUrl: './next-shift.component.html',
  styleUrls: ['./next-shift.component.css']
})
export class NextShiftComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm () {
    this.router.navigate(['request-new-reservation']);
  }

  goBack () {
    this.router.navigate(['next-leave-date']);
  }

}
