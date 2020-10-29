import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteEventsService } from '../services/route-events.service';
@Component({
  selector: 'app-rick-detail',
  templateUrl: './rick-detail.component.html',
  styleUrls: ['./rick-detail.component.css']
})
export class RickDetailComponent implements OnInit {
  product;
  constructor( private route: ActivatedRoute,
               private router: Router,
               private routeEventsService: RouteEventsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.product = JSON.parse(params.product);
    });
  }

  goback(): void{
    this.router.navigate([this.routeEventsService.getPreviousUrl()]);
  }
}
