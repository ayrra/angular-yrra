import { Component, OnInit, ViewChild } from '@angular/core';

import {Email} from '../shared/email';
import {EmailService} from '../services/email.service';
import {LoginService} from '../services/login.service';

import {Title} from '@angular/platform-browser';

import {FormBuilder, FormGroup, Validators, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  email: Email;
  @ViewChild(FormGroupDirective) contactFormDirective;


  constructor(private fb: FormBuilder, private emailservice: EmailService, private loginservice: LoginService, private titleservice: Title) {
    this.titleservice.setTitle("Yrra.net | Contact");
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      message: ['', [Validators.required, Validators.maxLength(8000)]]
    });
    //add valuechanged for errorhandling later on 
  }

  onSubmit() {
    this.email = this.contactForm.value;
    this.emailservice.sendEmail(this.email);
  }

}
