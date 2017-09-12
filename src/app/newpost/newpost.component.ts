import { Component, OnInit } from '@angular/core';

import {LoginService} from '../services/login.service';
import {BlogService} from '../services/blog.service';

import {FormBuilder, FormGroup, Validators, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  postForm: FormGroup;
  postContent: string;
  post: Post;

  constructor(private loginservice: LoginService, private blogservice: BlogService, private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      content: ['', [Validators.required]],
      postedOn: [null, [Validators.required]],
    });
  }

  onSubmit() {
    let message = {
      title: this.postForm.value.title,
      bodyText: this.postForm.value.content,
      postedOn: this.postForm.value.postedOn
    };
    console.log(message);
  }

  loggedIn() {
    return this.loginservice.checkAuth();
  }

}
