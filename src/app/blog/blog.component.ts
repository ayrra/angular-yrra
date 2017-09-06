import { Component, OnInit } from '@angular/core';

import {Post} from '../shared/post';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[];


  constructor(private blogservice: BlogService) { }

  ngOnInit() {
    this.blogservice.getPosts().subscribe(posts => this.posts = posts);
  }

}
