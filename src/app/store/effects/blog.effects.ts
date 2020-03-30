import { Injectable, } from "@angular/core";
import {Effect, Actions,ofType} from '@ngrx/effects'
import { BlogService } from 'src/app/services/blog.service';
import { IAppState } from '../state/app.state';
import { Store,select } from '@ngrx/store';
import {switchMap} from 'rxjs/operators';
import { GetBlogs, EBlogActions, GetBlogsSuccess } from '../actions/blog.actions';
import { of } from 'rxjs';


@Injectable()
export class BlogEffects{
    @Effect()
    getBlogs$ = this._action$.pipe(
        ofType<GetBlogs>(EBlogActions.GetBlogs),
        switchMap(()=> this._blogService.fetchBlogs()),
        switchMap( (userHttp: any)=> {
            console.log("inside the side effect")
            console.log(userHttp);
            return of(new GetBlogsSuccess(userHttp))
        } )
    )

    constructor(
        private _blogService: BlogService,
        private _action$: Actions,
        private _store: Store<IAppState>
    ){}
}