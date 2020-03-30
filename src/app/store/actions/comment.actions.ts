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
    constructor(public payload:string){}
}

export class GetCommentsSuccess implements Action {
    public readonly type = ECommentActions.GetCommentsSuccess
    constructor(public payload: IComment[] ){}
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



export type CommentActions = GetComments | GetCommentsSuccess | CreateComment | CreateCommentSuccess;

