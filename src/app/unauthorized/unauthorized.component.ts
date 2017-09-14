import { Component, OnInit } from '@angular/core';

import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {

  constructor(private titleservice: Title) { }

  ngOnInit() {
    this.titleservice.setTitle("Yrra.net | 404");
  }

}
