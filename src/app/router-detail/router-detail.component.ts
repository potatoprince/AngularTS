import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RouterService } from '../router.service';


@Component({
  selector: 'app-router-detail',
  templateUrl: './router-detail.component.html',
  styleUrls: ['./router-detail.component.css']
})


export class RouterDetailComponent implements OnInit {

@Input() router: Router;

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.routerService.updateRouter(this.router).subscribe(() => this.goBack());
  }

  constructor(
    private route: ActivatedRoute,
    private routerService: RouterService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRouter();
  }

getRouter(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.routerService.getRouter(id).subscribe(router => this.router = router);
}


}
