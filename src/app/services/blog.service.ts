import { Injectable } from '@angular/core';

import {Post} from '../shared/post';
import {Newpost} from '../shared/newpost';

import {LoginService} from './login.service';

import {RestangularModule, Restangular} from 'ngx-restangular';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BlogService {

  constructor(private restangular: Restangular, private loginservice: LoginService) { }

  getPosts(): Observable<Post[]> {
    return this.restangular.all('blog').getList();
  }

  getPost(seq: number): Observable<Post> {
    return this.restangular.one('blog', seq).get();
  }

  newPost(data: Newpost): Observable<Newpost> {
    return this.restangular.all('blog').post(data, {}, {'x-access-token': this.loginservice.checkAuth()});
  }

  editPost(data: Post): Observable<Post> {
    let seq = data.seq;
    delete data.seq;
    return this.restangular.all('blog/' + seq).customPUT(data, undefined, undefined, {'x-access-token': this.loginservice.checkAuth()});
  }

}
