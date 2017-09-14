import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

import 'rxjs/add/operator/switchmap';

import {LoginService} from '../services/login.service';

import {Title} from '@angular/platform-browser';

import {Post} from '../shared/post';
import {BlogService} from '../services/blog.service';


@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit {

  post: Post;

  constructor(private blogservice: BlogService, private loginservice: LoginService, private route: ActivatedRoute, private titleservice: Title) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => {return this.blogservice.getPost(+params['seq'])})
    .subscribe(post => {this.post = post; this.titleservice.setTitle("Yrra.net | " + post[0].title)});
  }
  
  loggedIn() {
    return this.loginservice.checkAuth();
  }

}
