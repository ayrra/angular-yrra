import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';

import 'rxjs/add/operator/switchmap';

import {LoginService} from '../services/login.service';

import {Post} from '../shared/post';
import {BlogService} from '../services/blog.service';

import {FormBuilder, FormGroup, Validators, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  postForm: FormGroup;
  post: Post;
  seq: number;

  constructor(private loginservice: LoginService, private blogservice: BlogService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.route.params
    .switchMap((params: Params) => {return this.blogservice.getPost(+params['seq'])})
    .subscribe(post => {this.post = post; this.updateValues(this.post);});
  }

  updateValues(p: Post) {
    this.postForm.patchValue({title: p[0].title, content: p[0].bodyText, postedOn: new Date(p[0].postedOn)});
    this.seq = p[0].seq;
  }

  createForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      postedOn: [undefined, [Validators.required]],
    });
  }

  onSubmit() {
    this.post = {
      title: this.postForm.value.title,
      bodyText: this.postForm.value.content,
      postedOn: this.postForm.value.postedOn,
      seq: this.seq
    }
    this.blogservice.editPost(this.post);
  }

  loggedIn() {
    return this.loginservice.checkAuth();
  }


}
