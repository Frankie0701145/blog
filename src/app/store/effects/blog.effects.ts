import { Injectable, } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects'
import { BlogService } from 'src/app/services/blog.service';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import {
    GetBlogs, EBlogActions, GetBlogsSuccess, CreateBlogSuccess, CreateBlog, EditBlog, EditBlogSuccess,
    DeleteBlog,
    DeleteBlogSuccess
} from '../actions/blog.actions';
import { of, Observable } from 'rxjs';
import { IBlog } from 'src/app/models/blog.interface';
import { Router } from '@angular/router'
import { StartLoading, StopLoading } from '../actions/loading.actions';
import { IBlogEditProperties } from 'src/app/models/editBlog.interface';
import { AddSuccessMessage } from '../actions/successMessage.action';
import { DeleteFilteredBlogSuccess } from '../actions/filteredBlogs.action';

/**
 * Injectable blogEffects class
 * @class
*/
@Injectable()
export class BlogEffects {
    /**
     * Fetching for blogs using the blogService 
     * @returns {Observable<GetBlogsSuccess>} - Returns a GetBlogsSuccess observable
     * 
    */
    @Effect()
    getBlogs$: Observable<GetBlogsSuccess> = this._action$.pipe(
        ofType<GetBlogs>(EBlogActions.GetBlogs),
        switchMap(() => this._blogService.fetchBlogs()),
        switchMap((userHttp: any) => {
            return of(new GetBlogsSuccess(userHttp))
        })
    )

    /**
     * Posting new blogs using blogService
     * @returns {Observable<IBlog | CreateBlogSuccess>}
    */
    @Effect()
    postBlogs$: Observable<IBlog | CreateBlogSuccess> = this._action$.pipe(
        ofType<CreateBlog>(EBlogActions.CreateBlog),
        map(action => action),
        switchMap((action) => {
            /**Action to change the state loading to true*/
            this._store.dispatch(new StartLoading());
            /**Post the blog to the server*/
            return this._blogService.postBlog(action.payload);
        }),
        switchMap((blogHttp: IBlog) => {
            /**Add the success Message*/
            this._store.dispatch(new AddSuccessMessage({ message: 'Blog created Successful' }));
            return of(new CreateBlogSuccess(blogHttp))
        }),
        tap(() => {
            /**Action to toggle the state loading to false*/
            this._store.dispatch(new StopLoading());
            /**Navigate the user to the blogs page*/
            return this.router.navigate(['/blogs']);
        })
    )

    /**
     * Edit the blogs using blogService
     * @return {Observable<EditBlogSuccess>} - returns EditBlogSuccess
    */
    @Effect()
    editBlog$: Observable<AddSuccessMessage | Observable<AddSuccessMessage>> = this._action$.pipe(
        ofType<EditBlog>(EBlogActions.EditBlog),
        map(action => action),
        switchMap((action) => {
            /**Action to change the loading state to true*/
            this._store.dispatch(new StartLoading());
            /**Edit the blog from the server*/
            return this._blogService.editBlog(action.payload.blogId, action.payload.blogProperties).pipe(
                map((blogHttp: IBlog) => {  
                    /**If successful*/
                    /**Trigger the EditBlogSuccess action*/
                    this._store.dispatch(new EditBlogSuccess({
                        blogId: blogHttp.id,
                        blogProperties: {
                            ...blogHttp
                        }
                    }));
                    /**Trigger the StopLoading Action*/
                    this._store.dispatch(new StopLoading());
                    /**Navigate the user to the blogs page*/
                    this.router.navigate(['/blogs']);
                    /**Add the success message*/
                    return new AddSuccessMessage({ message: 'Blog edited successful' });
                }),
                catchError((error) => {
                    /**If it fails because some blogs created by the user are not persisted on the db just edit the blog*/
                    /**Trigger the EditBlogSuccess action*/
                    this._store.dispatch(new EditBlogSuccess(
                        {
                            blogId: action.payload.blogId,
                            blogProperties: action.payload.blogProperties
                        }
                    ));
                    /**Trigger the StopLoading Action*/
                    this._store.dispatch(new StopLoading());
                    /**Navigate the user to the blogs page*/
                    this.router.navigate(['/blogs']);
                    /**Add the success message*/
                    return of(new AddSuccessMessage({ message: 'Blog edited successful'}))
                })
            )
        }),
    )

    /**'
     * Delete a blog from the server
    */

    @Effect()
    deleteBlog$ = this._action$.pipe(
        ofType<DeleteBlog>(EBlogActions.DeleteBlog),
        map(action =>action),
        switchMap((action)=>{
            this._store.dispatch(new StartLoading());
            return this._blogService.deleteBlog(action.payload.blogId).pipe(
                map(()=>{
                    /**Trigger the DeleteBlogSuccess action to delete the blog with that ID*/
                    this._store.dispatch(new DeleteBlogSuccess({blogId: action.payload.blogId}));
                    /**Incase the user is has triggered the DeleteBlog while searching delete the equivalent filtered blog*/
                    this._store.dispatch(new DeleteFilteredBlogSuccess({blogId: action.payload.blogId}))
                    /**Trigger the StopLoading Action*/
                    this._store.dispatch(new StopLoading());
                    /**Add the success message*/
                    return new AddSuccessMessage({ message: `Blog deleted successful` });
                }),
                catchError((error)=>{
                    /**If it fails because some blogs created by the user are not persisted on the db just edit the blog*/
                    /**Trigger the DeleteBlogSuccess action to delete the blog with that ID in the store*/
                    this._store.dispatch(new DeleteBlogSuccess({blogId: action.payload.blogId}));
                    /**Incase the user is has triggered the DeleteBlog while searching delete the equivalent filtered blog*/
                    this._store.dispatch(new DeleteFilteredBlogSuccess({blogId: action.payload.blogId}))
                    /**Trigger the StopLoading Action*/
                    this._store.dispatch(new StopLoading());
                    /**Add the success message*/
                    return of(new AddSuccessMessage({ message: 'Blog deleted successful'}))
                })
            )
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
    ) { }
}