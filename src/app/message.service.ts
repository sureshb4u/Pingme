import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {ApiConfigService} from './api-config.service';
import { HttpClient, HttpHeaders,HttpHandler } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class MessageService {

  constructor(private apiConfig:ApiConfigService,private http: HttpClient) { }

  sendMessages(data: Object): Observable<any> {
      var url = this.apiConfig.hostUrl+this.apiConfig.baseUrl+"sendMessage";
      return this.http.post<any>(url, data).pipe(
        tap((res) => console.log(res))
      );
    }
}
