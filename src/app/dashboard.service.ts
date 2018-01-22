import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {
}

public getJSON(): Observable<any> {
    return this.http.get("assets/json/stubbed.json")
    .pipe(map(res => res));
}

}
