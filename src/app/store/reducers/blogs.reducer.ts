/**Reducer that handles the blogs state*/
import {initialIBlogsState, IBlogsState} from '../state/blogs.state';
import {BlogActions, EBlogActions} from  '../actions/blog.actions';


/**
 * @param state - The extracted successMessage state
 * @param {BlogActions} action - The blogsActions
 * @return {IBlogsState} - returns the blog state
*/
export function blogsReducer(state=initialIBlogsState, action: BlogActions): IBlogsState {
    switch(action.type){
        /*handle GetBlogsSuccess Action*/
        case EBlogActions.GetBlogsSuccess:
            /**Take the blogs retrieved from a get request and return the new state with the blogs*/
            return{
                ...state,
                blogs: action.payload
            }
        /**Handle CreateBlogSuccess Action */
        case EBlogActions.CreateBlogSuccess: 
                /**Add the created blog to the beginning of the blogs state and return the new state */
                return{
                    ...state,
                    blogs: [action.payload,...state.blogs]
                }
        /** Handle EditingBlogSuccess Action*/
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
                /**if the blogIds don't match return the blog unchanged*/
                return blog;
            });
            /**return the new state*/
            return {
                ...state,
                blogs: newBlogs
            }
        /**
         * Add the blog commentNo property by one
        */
        case EBlogActions.AddBlogCommentNumber:
            return {
                blogs: state.blogs.map((blog)=>{
                    /**
                     * Find the blog with that blogId.
                     * Add one to the commentNo
                    */
                    if(blog.id == action.payload.blogId){
                        /**Add one to the commentNo*/
                        blog.commentNo+=1; 
                    }
                    /**return the blog*/
                    return blog
                })
            }
        /**
         * Delete Blog using the passed Blog Id
        */
        case EBlogActions.DeleteBlogSuccess:
            return {
                /**Filter out the blog with the passed blog id*/
                blogs: state.blogs.filter((blog)=>{
                    return blog.id !== action.payload.blogId
                })
            }
        /**return the initialBlogState*/
        default:
            return state;
    }
}