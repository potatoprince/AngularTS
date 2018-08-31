import { Component, OnInit } from '@angular/core';
import { Router } from '../router';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  routers: Router[] = [];

  constructor(private routerService: RouterService) { }

  ngOnInit() {
    this.getRouters();
  }

  getRouters(): void {
    this.routerService.getRouters().subscribe(routers => this.routers = routers.slice(0, 8));
  }
}
