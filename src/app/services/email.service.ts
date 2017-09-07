import { Injectable } from '@angular/core';

import {Email} from '../shared/email';

import {RestangularModule, Restangular} from 'ngx-restangular';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmailService {

  constructor(private restangular: Restangular) { }

  sendEmail(email: Email) {
    this.restangular.all('email').post(email);
  }

}
