import { Injectable, } from "@angular/core";
import {Effect, Actions,ofType} from '@ngrx/effects'
import { BlogService } from 'src/app/services/blog.service';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import {switchMap, map, tap} from 'rxjs/operators';
import { 
    GetBlogs, EBlogActions, GetBlogsSuccess, CreateBlogSuccess, CreateBlog, EditBlog, EditBlogSuccess 
} from '../actions/blog.actions';
import { of, Observable } from 'rxjs';
import { IBlog } from 'src/app/models/blog.interface';
import {Router } from '@angular/router'
import { StartLoading, StopLoading } from '../actions/loading.actions';
import { IBlogEditProperties } from 'src/app/models/editBlog.interface';
import { AddSuccessMessage } from '../actions/successMessage.action';

/**
 * Injectable blogEffects class
 * @class
*/
@Injectable()
export class BlogEffects{
    /**
     * Fetching for blogs using the blogService 
     * @returns {Observable<GetBlogsSuccess>} - Returns an GetBlogsSuccess observable
     * 
    */
    @Effect()
    getBlogs$: Observable<GetBlogsSuccess> = this._action$.pipe(
        ofType<GetBlogs>(EBlogActions.GetBlogs),
        switchMap(()=> this._blogService.fetchBlogs()),
        switchMap( (userHttp: any)=> {
            return of(new GetBlogsSuccess(userHttp))
        } )
    )
    
    /**
     * Posting new blogs using blogService
     * @returns {ObservableM<IBlog | CreateBlogSuccess>}
    */
    @Effect()
    postBlogs$: Observable<IBlog | CreateBlogSuccess> = this._action$.pipe(
        ofType<CreateBlog>(EBlogActions.CreateBlog),
        map(action => action),
        switchMap((action)=>{
            /**Action to change the state loading to true*/
            this._store.dispatch(new StartLoading());
            /**Post post blogs to the server*/
            return this._blogService.postBlog(action.payload);
        }),
        switchMap((blogHttp: IBlog)=>{
            /**Add the success Message*/
            this._store.dispatch(new AddSuccessMessage({message: 'Blog created Successful'}));
            return of(new CreateBlogSuccess(blogHttp))
        }),
        tap(()=>{
            /**Action to change the state loading to false*/
            this._store.dispatch(new StopLoading());
            /**Navigate the user to the blogs page*/
            return this.router.navigate(['/blogs']);
        })
    )

    /**
     * Edit the blogs using blogService
     * @return the observable EditBlogSuccess
    */
    @Effect()
    editBlog$: Observable<EditBlogSuccess> = this._action$.pipe(
        ofType<EditBlog>(EBlogActions.EditBlog),
        map(action => action),
        switchMap((action)=>{
            /**Action to change the state loading to true*/
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
            /**Add the success Message*/
            this._store.dispatch(new AddSuccessMessage({message: 'Blog edited successful'}));
            return of(new EditBlogSuccess(payload))
        }),
        tap(()=>{
            /**Action to change the state loading to false*/
            this._store.dispatch(new StopLoading());
            /**Navigate the user to the blogs page*/
            return this.router.navigate(['/blogs']);
        })
    )
    /**
     * Inject following BlogService, Action, store, and router
     * @constructor
     * @param {BlogService} _blogService - Contains http calls for fetching blogs, editing blogs and posting blogs
     * @param {Actions} _action$
     * @param {Store} _store
     * @param {Router} router 
    */
    constructor(
        private _blogService: BlogService,
        private _action$: Actions,
        private _store: Store<IAppState>,
        private router: Router
    ){}
}