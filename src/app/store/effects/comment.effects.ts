import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { GetComments, ECommentActions, GetCommentsSuccess, CreateCommentSuccess, CreateComment } from '../actions/comment.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import {CommentService} from '../../services/comment.service'
import { of, Observable } from 'rxjs';
import { IComment } from 'src/app/models/comment.interface';
import { StartLoading, StopLoading } from '../actions/loading.actions';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { AddSuccessMessage } from '../actions/successMessage.action';
import { AddBlogCommentNumber } from '../actions/blog.actions';

/**
 * Injectable CommentEffects class
 * @class
*/
@Injectable()
export class CommentEffects{
    /**
     * Fetching comments using the commentService
    */
    @Effect()
    getComments$: Observable<GetCommentsSuccess> = this._action$.pipe(
        ofType<GetComments>(ECommentActions.GetComments),
        map(action => {
            return action
        }),
        switchMap((action)=> this._commentService.fetchAllComments() ),
        switchMap((comments: IComment[])=>{
            return of(new GetCommentsSuccess(comments))
        })
    )
    @Effect()
    postComments$: Observable<AddSuccessMessage> = this._action$.pipe(
        ofType<CreateComment>(ECommentActions.CreateComment),
        map((action) =>{
            return action
        }),
        switchMap((action)=>{
           /**Action to change the state loading to true*/
          this._store.dispatch(new StartLoading());
          return this._commentService.postComment(action.payload).pipe(
              map((commentHttp: IComment)=>{
                    /**Add the newly created comment to the comments state*/
                    this._store.dispatch(new CreateCommentSuccess(commentHttp));
                    /**Add the blog commentNo by one*/
                    this._store.dispatch(new AddBlogCommentNumber({blogId:commentHttp.blogId}));
                    /**Trigger the StopLoading Action*/
                    this._store.dispatch(new StopLoading());
                    /**Add the success message*/
                    return new AddSuccessMessage({ message: 'Comment created successful'});
              }),
              catchError((error)=>{
                    console.log(error);
                    /**If it fails because some blogs created by the user are not persisted on the db just add the comment*/
                    this._store.dispatch(new CreateCommentSuccess(action.payload));
                    /**Add the blog commentNo by one*/
                    this._store.dispatch(new AddBlogCommentNumber({blogId:action.payload.blogId}));
                    /**Trigger the StopLoading Action*/
                    this._store.dispatch(new StopLoading());
                    /**Add the success message*/
                    return of(new AddSuccessMessage({ message: 'Comment created successful'}));
              })
          )
        })
    )
    /**
     * Injects the Action and CommentService
     * @param {Action} action
     * @param {CommentService} _commentService - Contains http calls for fetching comments
    */
    constructor(
        private _action$: Actions,
        private _commentService: CommentService,
        private _store: Store<IAppState>,
    ){

    }
}