import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {MdDatepickerModule} from '@angular/material';
import {MdNativeDateModule} from '@angular/material';

import {RestangularModule, Restangular} from 'ngx-restangular';
import {RestangularConfigFactory} from './shared/restConfig';

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
import { BlogpostComponent } from './blogpost/blogpost.component';

import {BlogService} from './services/blog.service';
import {EmailService} from './services/email.service';
import {LoginService} from './services/login.service';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import {EscapeHtmlPipe} from './pipes/keep-html.pipe';
import { LoginComponent } from './login/login.component';
import { NewpostComponent } from './newpost/newpost.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { EditComponent } from './edit/edit.component';


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
    ContactComponent,
    BlogpostComponent,
    EscapeHtmlPipe,
    LoginComponent,
    NewpostComponent,
    UnauthorizedComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [BlogService, EmailService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
