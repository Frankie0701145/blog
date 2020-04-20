import { Injectable, } from "@angular/core";
import {Effect, Actions,ofType} from '@ngrx/effects'
import { BlogService } from 'src/app/services/blog.service';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import {switchMap, map, tap} from 'rxjs/operators';
import { 
    GetBlogs, EBlogActions, GetBlogsSuccess, CreateBlogSuccess, CreateBlog, EditBlog, EditBlogSuccess 
} from '../actions/blog.actions';
import { of } from 'rxjs';
import { IBlog } from 'src/app/models/blog.interface';
import {Router } from '@angular/router'
import { StartLoading, StopLoading } from '../actions/loading.actions';
import { IBlogEditProperties } from 'src/app/models/editBlog.interface';

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

    /*Edit the blog*/
    @Effect()
    editBlog$ = this._action$.pipe(
        ofType<EditBlog>(EBlogActions.EditBlog),
        map(action => action),
        switchMap((action)=>{
            this._store.dispatch(new StartLoading());
            return this._blogService.editBlog(
                   action.payload.blogId, 
                   action.payload.blogProperties
                )
        }),
        switchMap((blogHttp: IBlog)=>{
            let payload: {blogId: string, blogProperties: IBlogEditProperties} = {
                blogId: blogHttp.id,
                blogProperties: {
                    ...blogHttp
                }
            }
            return of(new EditBlogSuccess(payload))
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