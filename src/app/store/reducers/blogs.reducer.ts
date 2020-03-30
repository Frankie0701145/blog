import {initialIBlogsState, IBlogsState} from '../state/blogs.state';
import {BlogActions, EBlogActions} from  '../actions/blog.actions';

export const blogsReducer = (
    state=initialIBlogsState, 
    action: BlogActions
): IBlogsState =>{
    switch(action.type){
        case EBlogActions.GetBlogsSuccess:
            return{
                ...state,
                blogs: action.payload
            }
        default:
            return state;
    }
}