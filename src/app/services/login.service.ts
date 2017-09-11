import { Injectable } from '@angular/core';

import {Credentials} from '../shared/credentials';

import {RestangularModule, Restangular} from 'ngx-restangular';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  token: string;

  constructor(private restangular: Restangular) { }

  requestAuth(creds: Credentials): Observable<Credentials> {
    return this.restangular.all('users/login').post(creds).subscribe(key => {this.token = key.token;});
  }

  checkAuth(): string {
    return this.token;
  }

  destroyToken() {
    this.token = undefined;
  }

}
