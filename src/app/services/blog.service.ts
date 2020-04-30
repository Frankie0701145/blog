import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IBlogEditProperties} from '../models/editBlog.interface'
import { IBlog } from '../models/blog.interface';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
/**
 * @class
 * Service of fetching, posting and editing blogs from the server
*/
export class BlogService {
  /**base url*/
  baseUrl: string= `${environment.baseUrl}/blogs`
  constructor(
    /**inject the HttpClient*/
    private http: HttpClient
  ) { }
  /**
   * fetch for blogs 
   * @returns {Observable<Object>}
  */
  fetchBlogs(): Observable<Object>{
    return this.http.get(this.baseUrl)
  }

  /**
   * post a blog 
   * @param {IBlog} blog - Data about the blog
   * @return {Observable<Object>}
  */
  postBlog(blog: IBlog): Observable<Object>{
    return this.http.post(this.baseUrl,blog)
  }

  /**
   * edit a blog
   * @param {string} blogId - The id of the blog
   * @param {IBlogEditProperties} blogProperties - The properties and values to edit on a blog
   * @return {Observable<Object>} 
  */
  editBlog(blogId: string, blogProperties: IBlogEditProperties): Observable<Object>{
    let url: string = `${this.baseUrl}/${blogId}`;
    return this.http.patch(url, blogProperties);
  }

  /**
   * Delete a blog
   * @param {string} blogId - The id of the blog
  */
 deleteBlog(blogId: string): Observable<Object>{
    let url: string = `${this.baseUrl}/${blogId}`;
    return this.http.delete(url)
 }
}
