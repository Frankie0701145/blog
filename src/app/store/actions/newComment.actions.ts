/**The new comment action*/
import { Action } from '@ngrx/store';
import { IComment } from 'src/app/models/comment.interface';

/**
 * @enum {string}
 * constants for newComments action
*/
export enum ENewCommentActions {
    AddNewComment = "[Comment] Add New Comment"
}

/**
 * @class
 * @implements {Action}
 * Adds new comments to the newComments 
*/

export class AddNewComment implements Action {
    public readonly type = ENewCommentActions.AddNewComment
    constructor(public payload: IComment){}
}

/**
 * the newComment type
*/
export type NewCommentActions = AddNewComment