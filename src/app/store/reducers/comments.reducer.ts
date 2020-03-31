/** The comments reducer*/
import {initialCommentsState, ICommentsState} from '../state/comments.state';
import {ECommentActions, CommentActions} from  '../actions/comment.actions';

export function commentsReducer(state=initialCommentsState, action: CommentActions):ICommentsState{
    switch(action.type){
        /**For Successful Retrieval of Comments*/
        case ECommentActions.GetCommentsSuccess:
            return {
                ...state,
                comments: action.payload
            }
        /**Remove comments */
        case ECommentActions.RemoveComments:
            return{...state, comments: []}
        default:
            return state
    }
}