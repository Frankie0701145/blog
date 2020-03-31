import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../../components/login/login.component';
import { AddBlogComponent } from '../../components/add-blog/add-blog.component';
import {BlogsComponent} from '../../components/blogs/blogs.component'
import { EditBlogComponent } from 'src/app/components/edit-blog/edit-blog.component';
import { AuthGuardService as AuthGuard } from 'src/app/services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'add_blog', component: AddBlogComponent, canActivate: [AuthGuard]},
  {path: 'blogs', component: BlogsComponent },
  {path: 'blogs/:id/edit',component: EditBlogComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/blogs', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
