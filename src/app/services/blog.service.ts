import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBlog } from '../models/blog.interface';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  Url: string= "https://my-json-server.typicode.com/Frankie0701145/blog-data/blogs"
  constructor(
    /**inject the HttpClient*/
    private http: HttpClient
  ) { }
  /**fetch blogs */
  fetchBlogs(): Observable<Object>{
    return this.http.get(this.Url)
  }
  /**post a blog */
  postBlog(blog: IBlog): Observable<Object>{
    return this.http.post(this.Url,blog)
  }
}
