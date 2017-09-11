import { Component, OnInit } from '@angular/core';

import {LoginService} from '../services/login.service';

import {FormBuilder, FormGroup, Validators, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private loginservice: LoginService, private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      postedOn: [null, [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.postForm.value);
  }

  loggedIn() {
    return this.loginservice.checkAuth();
  }

}
