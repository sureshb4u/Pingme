import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {ApiConfigService} from './api-config.service';
import { HttpClient, HttpHeaders,HttpHandler } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, x-auth"
 })
};

@Injectable()
export class LoginService {
  

  constructor(private apiConfig:ApiConfigService,private http: HttpClient) { }

authenticate(data: Object): Observable<any> {
  var url = this.apiConfig.hostUrl+"login";
  return this.http.post<any>(url, data, httpOptions).pipe(
    tap((res) => console.log(res))
  );
}

}
