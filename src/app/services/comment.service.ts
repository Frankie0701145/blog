import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
/**Service of fetching comments from the server*/
export class CommentService {
  /**base url*/
  Url: string= `${environment.baseUrl}/comments`
  
  "https://my-json-server.typicode.com/Frankie0701145/blog-data/comments"
  constructor(
    /**inject the HttpClient*/
    private http: HttpClient
  ) { }
  /**fetch comments */
  fetchComments(blogId: string): Observable<Object>{
      return this.http.get(this.Url)
  }

}
