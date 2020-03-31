/**Filter the Blogs Reduce*/
import {initialFilteredBlogsState, IFilteredBlogsState} from '../state/filteredBlogs.state';
import {FilteredBlogActions, EFilteredBlogActions} from  '../actions/filteredBlogs.action';

export function filterBlogsReducer(state=initialFilteredBlogsState, action: FilteredBlogActions): IFilteredBlogsState{
    switch(action.type){
        /**Search the blogs*/
        case EFilteredBlogActions.SearchBlogs:
                /**Retrieve the blogs passed as paylog */
                let blogs = action.payload.blogs
                /**Retrieve the search text to be used*/
                let searchText = action.payload.searchText
                /**iterate the blogs and filter blogs that match the search text*/
                let filteredBlogs = blogs.filter((blog)=>{
                    /**Create a regular expression from the search text and making sure it is not case sensitive*/
                    let titleRegx =  new RegExp(searchText, 'i');
                    /**Check if the current blog matches the regular express*/
                    let result = titleRegx.test(blog.title);
                    return result
                })
                return {
                    ...state,
                    filteredBlogs
                }
        case EFilteredBlogActions.RemoveFilteredBlogs:
            return{
                ...state,
                filteredBlogs: []
            }
        default:
            return state;
    }
}