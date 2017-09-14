import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators, FormGroupDirective} from '@angular/forms';

import {LoginService} from '../services/login.service';
import {Credentials} from '../shared/credentials';

import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  creds: Credentials;

  constructor(private fb: FormBuilder, private loginservice: LoginService, private titleservice: Title) {
    this.createForm();
   }

  ngOnInit() {
    this.titleservice.setTitle("Yrra.net | Login");
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    });
  }

  onSubmit() {
    this.creds = this.loginForm.value;
    this.loginservice.requestAuth(this.creds);
  }

  loggedIn() {
    return this.loginservice.checkAuth();
  }

}
