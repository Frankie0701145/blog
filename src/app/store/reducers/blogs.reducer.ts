/**Reducer that handles the blogs state*/
import {initialIBlogsState, IBlogsState} from '../state/blogs.state';
import {BlogActions, EBlogActions} from  '../actions/blog.actions';


/**
 * @param state - The extracted successMessage state
 * @param {BlogActions} action - The blogsAction
 * @return {IBlogsState} - returns the blog state
*/
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
        /** For Editing Blog Success Action*/
        case EBlogActions.EditBlogSuccess:
            /** Get the blogId from the passed payload*/
            let blogId: string = action.payload.blogId; 
            /**Get the properties to edit from the payload*/
            let toEditProperties = action.payload.blogProperties
            /**Retrieve the blogs state to avoid mutating the previous state*/
            let toEditBlogs = [...state.blogs];
            /** iterate the blogs and look for the blog with the passed blogId */
            let newBlogs =  toEditBlogs.map((blog)=>{
                /**If the blogId match, edit the blog with the blogProperties passed*/
                if(blog.id == blogId){
                    /**edit the blog and return the new blog*/
                    return{...blog,...toEditProperties};
                }
                /**if the blogId don't match return the blog unchanged*/
                return blog;
            });
            /**return the new state*/
            return {
                ...state,
                blogs: newBlogs
            }
        /**return the default state for the first time initialization*/
        default:
            return state;
    }
}