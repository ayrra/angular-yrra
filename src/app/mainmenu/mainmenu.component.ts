import { Component, OnInit } from '@angular/core';

import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

  constructor(private loginservice: LoginService) { }

  ngOnInit() {
  }

  loggedIn() {
    return this.loginservice.checkAuth();
  }

  logOff() {
    this.loginservice.destroyToken();
  }

}
