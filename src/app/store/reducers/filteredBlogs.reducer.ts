/**
 * filteredBlogs reducer
*/
import {initialFilteredBlogsState, IFilteredBlogsState} from '../state/filteredBlogs.state';
import {FilteredBlogActions, EFilteredBlogActions} from  '../actions/filteredBlogs.action';


/**
 * @param state 
 * @param {FilteredBlogActions} action 
*/
export function filterBlogsReducer(state=initialFilteredBlogsState, action: FilteredBlogActions): IFilteredBlogsState{
    switch(action.type){
        /**Handle the SearchBlogs Action*/
        case EFilteredBlogActions.SearchBlogs:
                /**Retrieve the blogs passed from the payload */
                let blogs = action.payload.blogs
                /**Retrieve the search text to be used for searching*/
                let searchText = action.payload.searchText
                /**iterate the blogs and filter blogs that match the search text*/
                let filteredBlogs = blogs.filter((blog)=>{
                    /**Create a regular expression from the search text, making sure it is not case sensitive*/
                    let titleRegx =  new RegExp(searchText, 'i');
                    /**Check if the current blog matches the regular expression*/
                    let result: boolean = titleRegx.test(blog.title);
                    /**Return the result of the check above*/
                    return result
                })
                /**Return the blogs that match the searchText */
                return {
                    ...state,
                    filteredBlogs
                }
        /**Clear the filtered blogs on the filteredBlogs state*/
        case EFilteredBlogActions.RemoveFilteredBlogs:
            return{
                ...state,
                filteredBlogs: []
            }
        /**
         * Delete FilteredBlog using the passed Blog Id
        */
        case EFilteredBlogActions.DeleteFilteredBlogsSuccess:
            return {
                /**
                 * Filter out blogs using the blogId
                */
                filteredBlogs: state.filteredBlogs.filter((filteredBlog)=>{
                    if(filteredBlog.id !== action.payload.blogId){
                        return filteredBlog
                    }
                })
            }
        /**Return the initialState */
        default:
            return state;
    }
}