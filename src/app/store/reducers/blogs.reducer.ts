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
        case EBlogActions.CreateBlogSuccess: 
                console.log(action.payload);
                console.log("Inside the CreateBlogsSuccess")
                return{
                    ...state,
                    blogs: [action.payload,...state.blogs]
                }
        default:
            return state;
    }
}