import { Component, OnInit } from '@angular/core';

import {Post} from '../shared/post';
import {BlogService} from '../services/blog.service';

import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[];
  sorted: Post[];

  constructor(private blogservice: BlogService, private titleservice: Title) { }

  ngOnInit() {
    this.titleservice.setTitle("Yrra.net | Blog");
    this.blogservice.getPosts().subscribe(posts => {this.posts = posts; this.sorted = this.sortPosts(posts);});
  }
  
  sortPosts(arr: Post[]): Post[] {
    let x = arr.map(data => data);
    x.sort((a,b) => {return b.seq - a.seq;});
    return x;
  }

}
