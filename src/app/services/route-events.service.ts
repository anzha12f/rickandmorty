import { Injectable } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, pairwise } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable()
export class RouteEventsService {
  //     // save the previous route
  //   public previousRoutePath = new BehaviorSubject<string>('');

  //   constructor(
  //     private router: Router,
  //     private location: Location
  //   ) {

  //     // ..initial prvious route will be the current path for now
  //     this.previousRoutePath.next(this.location.path());
  //     this.router.events.pipe(
  //         filter(e => e instanceof RoutesRecognized),
  //         pairwise(),
  //           )
  //       .subscribe((event: any[]) => {
  //           this.previousRoutePath.next(event[0].urlAfterRedirects);
  //       });
  //     }

  private previousUrl: string;
  private currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  public getPreviousUrl() {
    return this.previousUrl;
  }
}
