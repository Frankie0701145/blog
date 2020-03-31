/**Reducer that handles the blogs state*/
import {initialIBlogsState, IBlogsState} from '../state/blogs.state';
import {BlogActions, EBlogActions} from  '../actions/blog.actions';

export function blogsReducer(state=initialIBlogsState, action: BlogActions): IBlogsState {
    switch(action.type){
        /**For Get Blogs Success Action*/
        case EBlogActions.GetBlogsSuccess:
            /**Take the blogs retrieve from a get request and return the new state with the blogs*/
            return{
                ...state,
                blogs: action.payload
            }
        /**For Create Blog Success Action */
        case EBlogActions.CreateBlogSuccess: 
                /**Add the created blog to the beginning of the blogs state and return the new state */
                return{
                    ...state,
                    blogs: [action.payload,...state.blogs]
                }
        /** For Editing a blog*/
        case EBlogActions.EditBlog:
            /** Get the blogId from the passed payload*/
            let blogId: string = action.payload.blogId; 
            /**Get the properties to edit from the payload*/
            let toEditProperties = action.payload.blogProperty
            /**Retrieve the blogs state to avoid manipulating the previous state*/
            let toEditBlogs = [...state.blogs];
            /** iterate the blogs and look for the blog with the passed blogId */
            let newBlogs = toEditBlogs.map((blog)=>{
                if(blog.id === blogId){
                    /** If found change the properties of the blog and return the blog*/
                    return {...blog, toEditProperties}
                }
                /**otherwise return the blog unchanged*/
                return blog
            })
            /**return the new state*/
            return {
                ...state,
                blogs: newBlogs
            }
        default:
            return state;
    }
}