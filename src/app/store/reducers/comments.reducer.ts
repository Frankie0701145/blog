/** The comments reducer*/
import {initialCommentsState, ICommentsState} from '../state/comments.state';
import {ECommentActions, CommentActions} from  '../actions/comment.actions';

/**
 * @param state - The extracted comments state
 * @param {CommentActions} action 
*/
export function commentsReducer(state=initialCommentsState, action: CommentActions):ICommentsState{
    switch(action.type){
        /**
         * Adds comments to the comment state
        */
        case ECommentActions.GetCommentsSuccess:
            /**Adds the comments to the comments state*/
            return {
                ...state,
                comments: action.payload
            }
        /**
         * Adds a new comment to the comment state
        */
        case ECommentActions.CreateCommentSuccess:
            return {
                ...state,
                comments: [...state.comments,action.payload]
            }
        /**return the initialCommentsState for the first time(initialization)*/
        default:
            return state
    }
}