import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {restData} from './apiConfig'

@Injectable()
export class LoginService {

  constructor() { }

authenticate(){
  console.log(restData);
}

}
