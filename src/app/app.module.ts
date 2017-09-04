import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ContentComponent } from './content/content.component';

import 'hammerjs';

import { SocialfooterComponent } from './socialfooter/socialfooter.component';
import { MobilesocialfooterComponent } from './mobilesocialfooter/mobilesocialfooter.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { StuffComponent } from './stuff/stuff.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    ContentComponent,
    SocialfooterComponent,
    MobilesocialfooterComponent,
    HomeComponent,
    BlogComponent,
    StuffComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
