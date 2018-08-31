import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Router } from './router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MessageService } from './message.service'
import { catchError, map, tap} from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class RouterService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }


// Handle failed Http operations
private handleError<T> (operation = 'operation', result?: T){
  return (error: any): Observable<T> => {
    console.error(error); //Logs error to console
    this.log(`${operation} failed: $ {error.message}`);
    return of(result as T);
  }
}



private log (message: string){
  this.messageService.add(`RouterService: ${message}`);
}

private routersUrl = 'api/routers';

getRouter(id: number): Observable<Router> {
  const url = `${this.routersUrl}/${id}`;
  return this.http.get<Router>(url).pipe(
    tap(_ => this.log(`Fetched router id=${id}`)),
    catchError(this.handleError<Router>(`getRouter id=${id}`))
  );
}

  getRouters(): Observable<Router[]> {
      return this.http.get<Router[]>(this.routersUrl)
      .pipe(tap(routers => this.log('Fetched routers')), catchError(this.handleError('getRouters', []))
    );
}

updateRouter (router: Router): Observable<any>{
  return this.http.put(this.routersUrl, router, httpOptions).pipe(
    tap(_ => this.log(`Updated router id=${router.id}`)),
    catchError(this.handleError<any>('updateRouter'))
  );
}

addRouter (router: Router): Observable<Router> {
  return this.http.post<Router>(this.routersUrl, router, httpOptions).pipe(
    tap((router: Router) => this.log(`Added router with id=${router.id}`)),
    catchError(this.handleError<Router>('addRouter'))
  );
}


deleteRouter (router: Router | number): Observable<Router> {
  const id = typeof router==='number' ? router : router.id;
  const url = `${this.routersUrl}/${id}`;

  return this.http.delete<Router>(url, httpOptions).pipe(
    tap(_ => this.log(`Deleted router with id =${id}`)),
    catchError(this.handleError<Router>('deleteRouter'))
  );
}

searchRouter(term: string): Observable<Router[]> {
  if (!term.trim()){
    return of ([])
  }

  return this.http.get<Router[]>(`${this.routersUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`Found routers matching "${term}"`)),
    catchError(this.handleError<Router[]>('searchRouters', []))
  );
}




}
