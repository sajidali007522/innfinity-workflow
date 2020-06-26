import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-next-departure',
  templateUrl: './next-departure.component.html',
  styleUrls: ['./next-departure.component.css']
})
export class NextDepartureComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm () {
    this.router.navigate(['shift']);
  }

  goBack () {
    this.router.navigate(['next-return-date']);
  }
}
