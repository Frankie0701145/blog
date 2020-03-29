import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'add_blog', component: AddBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
