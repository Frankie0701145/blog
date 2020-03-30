import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import {AngularMaterialModule} from './modules/angular-material/app-material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CommentsComponent } from './components/blogs/comments/comments.component';
import {BlogService} from './services/blog.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddBlogComponent,
    BlogsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent],
  entryComponents: [CommentsComponent]
})
export class AppModule { }
