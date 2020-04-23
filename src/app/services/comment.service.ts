import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { IComment } from '../models/comment.interface';

@Injectable({
  providedIn: 'root'
})
/**
 * Service of fetching comments from the server*/
export class CommentService {
  
  constructor(
    /**inject the HttpClient*/
    private http: HttpClient
  ) { }
  /**
   * Fetch all the comments.
   * @return {Array<IBLog>} - Returns blogs
  */
  fetchAllComments(): Observable<Object>{
    let url: string= `${environment.baseUrl}/comments`
    return this.http.get(url);
  }
  /**
   * Post a comment
   * @return {IComment}
  */
  postComment(comment: IComment): Observable<Object>{
    let url: string = `${environment.baseUrl}/comments`;
    return this.http.post(url, comment);
  }
}
