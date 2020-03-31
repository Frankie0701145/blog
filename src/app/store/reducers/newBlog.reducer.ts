/**Reducer to handle the newBlog state*/
import { initialINewBlogsState, INewBlogsState } from '../state/newBlog.state';
import { NewBlogActions, ENewBlogActions } from '../actions/newBlog.actions';


export function newBlogReducer(state=initialINewBlogsState,action: NewBlogActions): INewBlogsState{
    
    switch(action.type){
        /**For handling adding of a Blog to a th newBlog*/
        case ENewBlogActions.AddNewBlog:
            /**Make sure to add the new Blog at the start of the newBlogs state array*/
            /**New blog is passed as a payload in the action*/
            let newState = {...state, newBlogs: [action.payload,...state.newBlogs]};
            return newState
        default:
            return state
    }
}   