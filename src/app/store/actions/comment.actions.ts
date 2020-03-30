import { Action } from '@ngrx/store';
import {IErrorMessage} from '../../models/errorMessage.interface';
import {ISuccessMessage} from '../../models/successMessage.interface';
import {IComment} from '../../models/comment.interface';

export enum ECommentActions {
    GetComments = '[Blogs] Get Comments',
    GetCommentsSuccess = '[Blogs] Get Comments Success',
    GetCommentsError = '[Blogs] Get Comments Error',
    CreateComment= '[Blogs] Create Blog',
    CreateCommentSuccess = '[Blogs] Create Comment Success',
    CreateCommentError = '[Blogs] Create Comment Error'
}

//Get Comments
export class GetComments implements Action {
    public readonly type = ECommentActions.GetComments
}

export class GetCommentsSuccess implements Action {
    public readonly type = ECommentActions.GetCommentsSuccess
    constructor(public payload: ISuccessMessage ){}
}

export class GetCommentsError implements Action {
    public readonly type = ECommentActions.GetCommentsError
    constructor(public payload: IErrorMessage ){}
}

//Create Comment
export class CreateComment implements Action {
    public readonly type = ECommentActions.CreateComment
    constructor(public payload: IComment){}
}

export class CreateCommentSuccess implements Action {
    public readonly type = ECommentActions.CreateCommentSuccess
    constructor(public payload: ISuccessMessage ){}
}

export class CreateCommentError implements Action {
    public readonly type = ECommentActions.CreateCommentError
    constructor(public payload: IErrorMessage ){}
}


export type BlogActions = GetComments | GetCommentsSuccess | GetCommentsError | CreateComment | CreateCommentSuccess | CreateCommentError;

