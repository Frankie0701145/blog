/**Contains Action for the comment and the enum constant names for the action*/
import { Action } from '@ngrx/store';
import {IComment} from '../../models/comment.interface';

/**
 * The constant names of the CommentActions
 * @enum {string}
*/
export enum ECommentActions {
    GetComments = '[Blogs] Get Comments',
    GetCommentsSuccess = '[Blogs] Get Comments Success',
    CreateComment= '[Comments] Create Blog',
    CreateCommentSuccess = '[Comments] Create Comment Success',
}

/**
 * @class 
 * @implements {Action}
 * A GetComment Action class that implements Action
 * The GetComments Action. Action for retrieving comments from the server which will be handle by getComments$ effect.
*/
export class GetComments implements Action {
    /**
     * Holds the action type constant
    */
    public readonly type = ECommentActions.GetComments
}
/**
 * @class
 * @implements {Action}
 * A GetCommentsSuccess class that implements Action
 * Action triggered after successful GetComments. Adds comments to the comments state.
*/

export class GetCommentsSuccess implements Action {
    /**
     * Holds the action type constant
    */
    public readonly type = ECommentActions.GetCommentsSuccess
    /**
     * Action triggered after successful GetComments. Adds comments to the comments state.
     * @param {IComment[]} - The payload contains comments
    */
    constructor(public payload: IComment[] ){}
}

/** 
 * @class
 * @implements {Action}
 * CreateComment Action class. Action for posting a comment handled by the postComment$ effect
*/
export class CreateComment implements Action {
    /**
     * Holds the action type constant
    */
    public readonly type = ECommentActions.CreateComment
    /**
     * CreateComment Action class. Action for posting a comment handled by the postComment$ effect
     * @param {IComment} - The payload contains the comment properties
    */
    constructor(public payload: IComment){}
}
/**
 * @class
 * @implements {Action}
 * CreateCommentSuccess Action class. Action that is triggered after a successful CreateComment Action.
 * Adds new comments to the comments state
*/

export class CreateCommentSuccess implements Action {
    /**
     * Holds the action type constant
    */
    public readonly type = ECommentActions.CreateCommentSuccess
    /**
     * CreateCommentSuccess Action class. Action that is triggered after a CreateComment Action.
     * Adds new comments to the comments state
     * @param {IComment} payload - The payload contains the comment
    */
    constructor(public payload: IComment ){}
}

/**
 * The commentActions Type
*/
export type CommentActions = GetComments | GetCommentsSuccess | CreateComment | CreateCommentSuccess;

