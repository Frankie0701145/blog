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
        case EBlogActions.EditBlog:
            console.log("Editing")
            let blogId: string = action.payload.blogId;
            let toEditProperty = action.payload.blogProperty
            let toEditBlogs = {...state.blogs};
            let newBlogs = toEditBlogs.map((blog)=>{
                if(blog.id === blogId){
                    return {...blog, toEditProperty}
                }
                return blog
            })
            return {
                ...state,
                blogs: newBlogs
            }
        default:
            return state;
    }
}