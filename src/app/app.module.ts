import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ContentComponent } from './content/content.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
