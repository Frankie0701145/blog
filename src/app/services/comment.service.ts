import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  Url: string= "https://my-json-server.typicode.com/Frankie0701145/blog-data/comments"
  constructor(
    /**inject the HttpClient*/
    private http: HttpClient
  ) { }
  /**fetch comments */
  fetchComments(blogId: string): Observable<Object>{
      return this.http.get(this.Url)
  }

}
