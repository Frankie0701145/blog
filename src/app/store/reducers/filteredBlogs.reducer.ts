import {initialFilteredBlogsState, IFilteredBlogsState} from '../state/filteredBlogs.state';
import {FilteredBlogActions, EFilteredBlogActions} from  '../actions/filteredBlogs.action';

export const filterBlogsReducer = (
    state=initialFilteredBlogsState, 
    action: FilteredBlogActions
): IFilteredBlogsState =>{
    switch(action.type){
        case EFilteredBlogActions.SearchBlogs:
        
                let blogs = action.payload.blogs
                let searchText = action.payload.searchText
                console.log(state)

                let filteredBlogs = blogs.filter((blog)=>{
                    let titleRegx =  new RegExp(searchText, 'i');
                    let result = titleRegx.test(blog.title);
                    return result
                })
                console.log("Filtering")
                console.log(filteredBlogs)
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