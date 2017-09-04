import {Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {BlogComponent} from '../blog/blog.component';
import {StuffComponent} from '../stuff/stuff.component';
import {ContactComponent} from '../contact/contact.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'stuff', component: StuffComponent},
    {path: 'contact', component: ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];