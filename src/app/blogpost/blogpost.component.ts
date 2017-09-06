import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import 'rxjs/add/operator/switchmap';

import {Post} from '../shared/post';
import {BlogService} from '../services/blog.service';


@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit {

  post: Post;

  constructor(private blogservice: BlogService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => {return this.blogservice.getPost(+params['seq'])})
    .subscribe(post => {this.post = post});

  }
}
