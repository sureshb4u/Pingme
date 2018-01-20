import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiConfigService {

  public hostUrl:string = "https:server-dot-pingme-191816.appspot.com/";
  public baseUrl:string = "api/"
  constructor() { }

}
