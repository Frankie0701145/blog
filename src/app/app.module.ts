import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects'

import { AppRoutingModule } from './modules/routing/app-routing.module';
import {AngularMaterialModule} from './modules/angular-material/app-material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CommentsComponent } from './components/blogs/comments/comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {appReducers} from './store/reducers/app.reducer';
import {BlogEffects} from './store/effects/blog.effects';
import { CommentEffects } from './store/effects/comment.effects';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddBlogComponent,
    BlogsComponent,
    CommentsComponent,
    EditBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([BlogEffects,CommentEffects]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CommentsComponent]
})
export class AppModule { }
