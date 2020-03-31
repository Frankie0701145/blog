import { initialINewBlogsState, INewBlogsState } from '../state/newBlog.state';
import { NewBlogActions, ENewBlogActions } from '../actions/newBlog.actions';

// }

export const newBlogReducer = (
    state=initialINewBlogsState,
    action: NewBlogActions
): INewBlogsState=>{
    
    switch(action.type){
        case ENewBlogActions.AddNewBlog:
            console.log("Add newBlogs")
            console.log(action.payload)
            let newState = {...state, newBlogs: [action.payload,...state.newBlogs]};
            console.log(newState)
            return newState
        default:
            return state
    }
}   