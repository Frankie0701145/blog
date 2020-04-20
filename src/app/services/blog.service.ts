import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IBlogEditProperties} from '../models/editBlog.interface'
import { IBlog } from '../models/blog.interface';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl: string= "https://my-json-server.typicode.com/Frankie0701145/blog-data/blogs"
  constructor(
    /**inject the HttpClient*/
    private http: HttpClient
  ) { }
  /**fetch blogs */
  fetchBlogs(): Observable<Object>{
    return this.http.get(this.baseUrl)
  }
  /**post a blog */
  postBlog(blog: IBlog): Observable<Object>{
    return this.http.post(this.baseUrl,blog)
  }
  /**edit a blog*/
  editBlog(blogId: string, blogProperties: IBlogEditProperties): Observable<Object>{
    let url: string = `${this.baseUrl}/${blogId}`;
    return this.http.patch(url, blogProperties);
  }
}
