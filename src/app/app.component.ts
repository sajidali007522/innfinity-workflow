import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'innfinity-workflow';
  currentUrl;
  constructor(private router: Router) {
    this.currentUrl = '';
    router.events.subscribe((routerEvent) => {
      this.checkRouterEvent(routerEvent);
    });
    console.log(this.currentUrl);
  }

  ngOnInit () {
  }

  checkRouterEvent(routerEvent): void {
    if (routerEvent instanceof NavigationStart) {
      console.log('navigation started');
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      console.log('navigation end');
      this.currentUrl = this.router.url.split("/").join("");
      console.log(this.currentUrl);
    }
  }
}
