import { Injectable } from '@angular/core';

import {Post} from '../shared/post';

import {RestangularModule, Restangular} from 'ngx-restangular';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BlogService {

  constructor(private restangular: Restangular) { }

  getPosts(): Observable<Post[]> {
    return this.restangular.all('blog').getList();
  }

  getPost(seq: number): Observable<Post> {
    return this.restangular.one('blog', seq).get();
  }

}
