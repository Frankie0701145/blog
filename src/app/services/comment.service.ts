import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  Url: string= "https://my-json-server.typicode.com/Frankie0701145/blog-data/comments"
  constructor(
    private http: HttpClient
  ) { }

  fetchComments(blogId: string): Observable<Object>{
      return this.http.get(this.Url)
  }

}
