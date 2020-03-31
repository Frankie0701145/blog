import { Action } from '@ngrx/store';
import { IComment } from 'src/app/models/comment.interface';

export enum ENewCommentActions {
    AddNewComment = "[Comment] Add New Comment"
}

export class AddNewComment implements Action {
    public readonly type = ENewCommentActions.AddNewComment
    constructor(public payload: IComment){}
}

export type NewCommentActions = AddNewComment