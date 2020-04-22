/**Reducer to handler the comments state*/
import { initialINewCommentsState, INewCommentsState } from '../state/newComment.state';
import { NewCommentActions, ENewCommentActions } from '../actions/newComment.actions';

/**
 * @param state
 * @param {NewCommentActions} action
*/

export function newCommentReducer(state=initialINewCommentsState,action: NewCommentActions): INewCommentsState{
    switch(action.type){
        /**Handle the action of adding a new comment*/
        case ENewCommentActions.AddNewComment:
            /**Add the new comment at the beginning of the newComments state*/
            let newState = {...state, newComments: [...state.newComments, action.payload]};
            return newState
        /**First time*/
        default:
            return state
    }
}   