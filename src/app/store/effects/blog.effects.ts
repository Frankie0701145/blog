import { Injectable, } from "@angular/core";
import {Effect, Actions,ofType} from '@ngrx/effects'
import { BlogService } from 'src/app/services/blog.service';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import {switchMap, map, tap} from 'rxjs/operators';
import { GetBlogs, EBlogActions, GetBlogsSuccess, CreateBlogSuccess, CreateBlog } from '../actions/blog.actions';
import { of } from 'rxjs';
import { IBlog } from 'src/app/models/blog.interface';
import {Router } from '@angular/router'
import { StartLoading, StopLoading } from '../actions/loading.actions';

@Injectable()
export class BlogEffects{
    /**Fetching for blogs using the blogService */
    @Effect()
    getBlogs$ = this._action$.pipe(
        ofType<GetBlogs>(EBlogActions.GetBlogs),
        switchMap(()=> this._blogService.fetchBlogs()),
        switchMap( (userHttp: any)=> {
            return of(new GetBlogsSuccess(userHttp))
        } )
    )
    /**Posting new blogs using blogService*/
    @Effect()
    postBlogs$ = this._action$.pipe(
        ofType<CreateBlog>(EBlogActions.CreateBlog),
        map(action => action),
        switchMap((action)=>{
            this._store.dispatch(new StartLoading());
            return this._blogService.postBlog(action.payload);
        }),
        switchMap((blogHttp: IBlog)=>{
            return of(new CreateBlogSuccess(blogHttp))
        }),
        tap(()=>{
            this._store.dispatch(new StopLoading());
            return this.router.navigate(['/blogs']);
        })
    )

    constructor(
        private _blogService: BlogService,
        private _action$: Actions,
        private _store: Store<IAppState>,
        private router: Router
    ){}
}