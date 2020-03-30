import {initialCommentsState, ICommentsState} from '../state/comments.state';
import {ECommentActions, CommentActions} from  '../actions/comment.actions';

export const commentsReducer = (
    state=initialCommentsState, 
    action: CommentActions
):ICommentsState=>{
    switch(action.type){
        case ECommentActions.GetCommentsSuccess:
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}