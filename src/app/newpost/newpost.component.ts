import { Component, OnInit } from '@angular/core';

import {LoginService} from '../services/login.service';
import {BlogService} from '../services/blog.service';

import {Title} from '@angular/platform-browser';

import {Newpost} from '../shared/newpost';

import {FormBuilder, FormGroup, Validators, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  postForm: FormGroup;
  postContent: string;
  newPost: Newpost;

  constructor(private loginservice: LoginService, private blogservice: BlogService, private fb: FormBuilder, private titleservice: Title) {
    this.createForm();
   }

  ngOnInit() {
    this.titleservice.setTitle("Yrra.net | New Post");
  }

  createForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      content: ['', [Validators.required]],
      postedOn: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.newPost = {
      title: this.postForm.value.title,
      bodyText: this.postForm.value.content,
      postedOn: this.postForm.value.postedOn
    };
    this.blogservice.newPost(this.newPost);
  }

  loggedIn() {
    return this.loginservice.checkAuth();
  }

}
