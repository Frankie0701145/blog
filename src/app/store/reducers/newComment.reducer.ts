/**Reducer to handler the comments state*/
import { initialINewCommentsState, INewCommentsState } from '../state/newComment.state';
import { NewCommentActions, ENewCommentActions } from '../actions/newComment.actions';


export function newCommentReducer(state=initialINewCommentsState,action: NewCommentActions): INewCommentsState{
    switch(action.type){
        /**Handle the action of adding a new comment*/
        case ENewCommentActions.AddNewComment:
            let newState = {...state, newComments: [...state.newComments, action.payload]};
            return newState
        default:
            return state
    }
}   