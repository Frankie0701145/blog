import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
/**
 * Service of fetching comments from the server*/
export class CommentService {
  /**base url*/
  Url: string= `${environment.baseUrl}/comments`
  
  constructor(
    /**inject the HttpClient*/
    private http: HttpClient
  ) { }
  /**
   * Fetch all the comments.
   * @return {Array<IBLog>} - Returns blogs
  */
  fetchAllComments(): Observable<Object>{
    return this.http.get(this.Url)
  }
}
