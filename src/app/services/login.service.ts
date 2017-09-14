import { Injectable } from '@angular/core';

import {Credentials} from '../shared/credentials';

import {RestangularModule, Restangular} from 'ngx-restangular';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private restangular: Restangular) { }

  requestAuth(creds: Credentials): Observable<Credentials> {
    return this.restangular.all('users/login').post(creds).subscribe(key => {window.sessionStorage.setItem('login-token', key.token);});
  }

  checkAuth(): string {
    return window.sessionStorage.getItem('login-token');
  }

  destroyToken() {
    window.sessionStorage.setItem('login-token', '');
  }

}
