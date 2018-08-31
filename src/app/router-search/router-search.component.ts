import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Router } from '../router';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-router-search',
  templateUrl: './router-search.component.html',
  styleUrls: ['./router-search.component.css']
})
export class RouterSearchComponent implements OnInit {

routers$: Observable<Router[]>;
private searchTerms = new Subject<string>();

  constructor(private routerService: RouterService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

this.routers$ = this.searchTerms.pipe(
  debounceTime(300), distinctUntilChanged(),switchMap((term: string) => this.routerService.searchRouter(term)),
);
  }

}
