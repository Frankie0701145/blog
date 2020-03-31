import { initialINewCommentsState, INewCommentsState } from '../state/newComment.state';
import { NewCommentActions, ENewCommentActions } from '../actions/newComment.actions';


export const newCommentReducer = (
    state=initialINewCommentsState,
    action: NewCommentActions
): INewCommentsState=>{
    
    switch(action.type){
        case ENewCommentActions.AddNewComment:
            let newState = {...state, newComments: [...state.newComments, action.payload]};
            return newState
        default:
            return state
    }
}   