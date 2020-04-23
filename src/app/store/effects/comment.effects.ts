import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { GetComments, ECommentActions, GetCommentsSuccess } from '../actions/comment.actions';
import { map, switchMap } from 'rxjs/operators';
import {CommentService} from '../../services/comment.service'
import { of, Observable } from 'rxjs';
import { IComment } from 'src/app/models/comment.interface';

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
    /**
     * Injects the Action and CommentService
     * @param {Action} action
     * @param {CommentService} _commentService - Contains http calls for fetching comments
    */
    constructor(
        private _action$: Actions,
        private _commentService: CommentService,
    ){

    }
}