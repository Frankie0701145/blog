import { Injectable, } from "@angular/core";
import {Effect, Actions,ofType} from '@ngrx/effects'
import { BlogService } from 'src/app/services/blog.service';
import { IAppState } from '../state/app.state';
import { Store,select } from '@ngrx/store';
import {switchMap, map, tap} from 'rxjs/operators';
import { GetBlogs, EBlogActions, GetBlogsSuccess, CreateBlog, CreateBlogSuccess } from '../actions/blog.actions';
import { of } from 'rxjs';
import { IBlog } from 'src/app/models/blog.interface';
import {AddNewBlog} from '../actions/newBlog.actions';
import {Router } from '@angular/router'

@Injectable()
export class BlogEffects{
    @Effect()
    getBlogs$ = this._action$.pipe(
        ofType<GetBlogs>(EBlogActions.GetBlogs),
        switchMap(()=> this._blogService.fetchBlogs()),
        switchMap( (userHttp: any)=> {
            return of(new GetBlogsSuccess(userHttp))
        } )
    )
    @Effect()
    postBlogs$ = this._action$.pipe(
        ofType<CreateBlog>(EBlogActions.CreateBlog),
        map(action => action),
        switchMap((action)=> this._blogService.postBlog(action.payload)),
        switchMap((blogHttp: IBlog)=>{
            return of(new AddNewBlog(blogHttp))
        }),
        tap(()=>this.router.navigate(['/blogs']))
    )

    constructor(
        private _blogService: BlogService,
        private _action$: Actions,
        private _store: Store<IAppState>,
        private router: Router
    ){}
}