import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { GetComments, ECommentActions, GetCommentsSuccess } from '../actions/comment.actions';
import { map, switchMap } from 'rxjs/operators';
import {CommentService} from '../../services/comment.service'
import { of } from 'rxjs';
import { IComment } from 'src/app/models/comment.interface';

@Injectable()
export class CommentEffects{
    @Effect()
    getComments = this._action$.pipe(
        ofType<GetComments>(ECommentActions.GetComments),
        map(action => {
            return action
        }),
        switchMap((action)=> this._commentService.fetchComments(action.payload) ),
        switchMap((comments: IComment[])=>{
            return of(new GetCommentsSuccess(comments))
        })
    )

    constructor(
        private _action$: Actions,
        private _commentService: CommentService,
    ){

    }
}