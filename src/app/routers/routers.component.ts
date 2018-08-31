import { Component, OnInit } from '@angular/core';
import { Router } from '../router';
import { RouterService } from '../router.service';



@Component({
  selector: 'app-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.css']
})



export class RoutersComponent implements OnInit {

routers: Router[];

constructor(private routerService: RouterService) { }


getRouters(): void {
  this.routerService.getRouters().subscribe(routers => this.routers = routers);
}

  ngOnInit() {
    this.getRouters();
  }


  add(name: string): void {
    name = name.trim();
    if (!name) {return;}

    this.routerService.addRouter({ name } as Router)
    .subscribe(router => {
    this.routers.push(router);
    });
}

  delete(router: Router): void{
    this.routers = this.routers.filter(r => r !== router);
    this.routerService.deleteRouter(router).subscribe();
  }


}
