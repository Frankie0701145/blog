import { initialINewCommentsState, INewCommentsState } from '../state/newComment.state';
import { NewCommentActions, ENewCommentActions } from '../actions/newComment.actions';


export const newCommentReducer = (
    state=initialINewCommentsState,
    action: NewCommentActions
): INewCommentsState=>{
    
    switch(action.type){
        case ENewCommentActions.AddNewComment:

            let newState = {...state, newBlogs: [action.payload,...state.newComment]};
            console.log(newState)
            return newState
        default:
            return state
    }
}   